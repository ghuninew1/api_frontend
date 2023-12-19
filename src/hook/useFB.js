import { useEffect, useState } from "react";
import { useLocalStorage } from "#hook/useLocalStorage";

export function useFB() {
    const [userFB, setUserFB] = useLocalStorage("userFB", null);

    useEffect(() => {
        window.fbAsyncInit = function () {
            window?.FB.init({
                appId: import.meta.env.VITE_FACEBOOK_APP_ID,
                cookie: true,
                xfbml: true,
                version: "v18.0",
            });
            window.FB.AppEvents.logPageView();
        };

        const script = document.createElement("script");
        script.src = "https://connect.facebook.net/th_TH/sdk.js";
        script.crossOrigin = "anonymous";
        script.async = true;
        script.defer = true;
        script.id = "facebook-jssdk";
        document.head.appendChild(script);

        // const meta = document.createElement("meta");
        // meta.setAttribute("property", "fb:app_id");
        // meta.content = import.meta.env.VITE_FACEBOOK_APP_ID;
        // document.head.appendChild(meta);

        script.onload = () => {
            checkStatus();
        };

        return () => {
            document.head.removeChild(script);
            // document.head.removeChild(meta);
        };
    }, []);

    const checkStatus = () => {
        window.FB?.getLoginStatus((response) => {
            if (response.status === "connected") {
                console.log("connected");
            } else if (response.status === "not_authorized") {
                console.log("not_authorized");
            } else {
                console.log("not login");
            }
        });
    };

    function logoutFB() {
        checkStatus();
        window.FB?.logout(() => {
            setUserFB(null);
        });
    }

    function loginFB() {
        checkStatus();
        window.FB?.login(
            (response) => {
                if (response.authResponse) {
                    window.FB?.api(
                        `/${response.authResponse.userID}?fields=id,name,email,picture`,
                        (res) => {
                            setUserFB({ ...response.authResponse, ...res });
                        }
                    );
                } else {
                    console.log(
                        "User cancelled login or did not fully authorize."
                    );
                }
            },
            { scope: "email,public_profile" }
        );
    }

    return { userFB, loginFB, logoutFB, checkStatus };
}

export function useFBapi(url) {
    const { userFB, checkStatus } = useFB();
    const [data, setData] = useState(null);

    function getData() {
        checkStatus();
        if (userFB) {
            window.FB?.api(
                `/${url}?access_token=${userFB.accessToken}&fields=id,name,email,picture`,
                (response) => {
                    setData(response);
                }
            );
        }
    }

    return { data, getData };
}
