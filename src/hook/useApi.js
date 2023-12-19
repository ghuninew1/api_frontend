import { makeApi } from "#api/makeApi";
import { useCallback, useState, useRef } from "react";

const useApi = () => {
    const [loading, setLoading] = useState(false);
    const mounted = useRef(false);

    const getFetch = useCallback(async ({ url, method, data, ...prop }) => {
        const ctrl = new AbortController();

        if (!mounted.current) {
            mounted.current = true;
            setLoading(true);

            try {
                const isUser = await makeApi({
                    url,
                    method,
                    data,
                    config: {
                        signal: ctrl.signal,
                    },
                    ...prop,
                });
                if (isUser) {
                    setLoading(false);
                    return Promise.resolve(isUser);
                }
            } catch (error) {
                setLoading(true);
                return Promise.reject(error);
            }
        }

        return () => {
            ctrl && ctrl.abort();
            mounted.current = false;
        };
    }, []);

    return [getFetch, loading];
};

export default useApi;
