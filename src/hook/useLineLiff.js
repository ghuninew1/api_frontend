import { useEffect, useCallback, useState } from "react";
import { useLocalStorage } from "#hook/useLocalStorage";
import liff from "@line/liff";

export function useLineLiff() {
    const [userLine, setUserLine] = useLocalStorage("userLine", null);
    const [isStatus, setIsStatus] = useState(false);

    useEffect(() => {
        liff.init({ liffId: import.meta.env.VITE_LIFF_ID }).then(() => {
            setIsStatus(true);
            if (liff.isLoggedIn()) {
                console.log("logged in");
            } else {
                console.log("not logged in");
            }
        });
    }, []);

    const getUserProfile = useCallback(async () => {
        if (liff?.isLoggedIn()) {
            const profile = await liff.getProfile();
            setUserLine(profile);
        }
    }, [setUserLine]);

    useEffect(() => {
        if (isStatus) {
            getUserProfile();
        }

        return () => {
            setIsStatus(false);
        };
    }, [getUserProfile, isStatus]);

    const lineLogin = useCallback(() => {
        if (!liff.isLoggedIn()) {
            liff.login({
                redirectUri: "https://localhost:6440/auth/line",
            });
        }
    }, []);

    const lineLogout = useCallback(() => {
        if (liff.isLoggedIn()) {
            liff.logout();
            setUserLine(null);
        }
    }, [setUserLine]);

    return {
        userLine,
        lineLogin,
        lineLogout,
    };
}
