import { useEffect, useState, useCallback } from "react";
import { useLocalStorage } from "#hook/useLocalStorage";
import keys from "#client_secret.json";
import axios from "axios";

export function useGoogle() {
    const [userGoogle, setUserGoogle] = useLocalStorage("userGg", null);
    const [isLogin, setIsLogin] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [accessToken, setAccessToken] = useState(null);

    async function oauthSignIn() {
        const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
        const params = {
            client_id: keys.web.client_id,
            redirect_uri: keys.web.redirect_uris[0],
            response_type: "token",
            scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
            include_granted_scopes: "true",
            state: "pass-through value",
        };
        const getParams = (params) => {
            return Object.keys(params)
                .map((key) => `${key}=${encodeURIComponent(params[key])}`)
                .join("&");
        };
        const url = `${oauth2Endpoint}?${getParams(params)}`;
        window.open(url, "_parent");
    }

    useEffect(() => {
        if (window.location.hash) {
            getProfile();
        }
    }, []);

    async function getProfile() {
        const accessToken = window.location.hash
            .substring(1)
            .split("&")
            .reduce((initial, item) => {
                if (item) {
                    const parts = item.split("=");
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {}).access_token;

        if (accessToken) {
            setAccessToken(accessToken);
            setIsLoaded(true);
        }
    }

    const fetchProfile = useCallback(async () => {
        if (accessToken && !userGoogle) {
            await axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
                )
                .then((res) => {
                    setUserGoogle(res.data);
                    setIsLogin(true);
                    setIsLoaded(false);
                })
                .catch((err) => {
                    console.log(err);
                    setIsError(err);
                });
        }
    }, [accessToken, setUserGoogle, userGoogle]);

    async function loginGg() {
        await oauthSignIn();
    }

    function logoutGg() {
        setUserGoogle(null);
        setIsLogin(false);
        setIsLoaded(false);
        setIsError(false);
    }

    useEffect(() => {
        if (isLoaded && !isLogin) {
            fetchProfile();
        }
    }, [fetchProfile, isLoaded, isLogin]);

    return {
        loginGg,
        logoutGg,
        userGoogle,
        isLogin,
        isError,
        isLoaded,
    };
}
