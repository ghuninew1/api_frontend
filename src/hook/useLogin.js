import { makePostApi } from "#api/makeApi";
import { useCallback, useState, useRef } from "react";

const useLogin = (url) => {
    const [loading, setLoading] = useState(false);
    const mounted = useRef(false);

    const apiFetch = useCallback(
        async (data) => {
            if (!mounted.current) {
                mounted.current = true;
                setLoading(true);
                try {
                    const response = await makePostApi(url, data);
                    if (response) {
                        setLoading(false);
                        return Promise.resolve(response);
                    }
                } catch (error) {
                    setLoading(true);
                    return Promise.reject(error);
                }
            }
            return (mounted.current = false);
        },
        [url]
    );

    return [apiFetch, loading];
};
export default useLogin;

// Usage:
// import useLogin from "#hook/useLogin";
// const url = "/api/login";
// const [login, loading] = useLogin(url);
// const handleLogin = async () => {
//     try {
//         const response = await login.apiFetch(data);
//         if (response) {
//             // do something
//         }
//     } catch (error) {
//         // do something
//     }
// };
