import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { makeApi } from "#api/makeApi";

export function useData({ url, method, config }) {
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(0);

    const refetch = () => setReload((prev) => prev + 1);
    useEffect(() => {
        const ctrl = new AbortController();
        const fetchData = async () => {
            try {
                const res = await makeApi({
                    url,
                    method,
                    config: {
                        ...config,
                        signal: ctrl.signal,
                    },
                });
                if (res) {
                    setData(res);
                    return Promise.resolve(res);
                }
            } catch (err) {
                return Promise.reject(err);
            }
        };
        fetchData();

        return () => {
            ctrl && ctrl.abort();
        };
    }, [config, method, url, reload]);

    return [data, refetch];
}
useData.propTypes = {
    method: PropTypes.string,
    url: PropTypes.string,
    config: PropTypes.object,
};

export function useDataFn() {
    const [data, setData] = useState([]);
    const [controller, setController] = useState();

    const axiosFetch = useCallback(async ({ url, method, config }) => {
        try {
            const ctrl = new AbortController();
            setController(ctrl);
            const res = await makeApi({
                url,
                method,
                config: {
                    ...config,
                    signal: ctrl.signal,
                },
            });
            if (res) {
                Promise.resolve(setData(res));
            }
        } catch (err) {
            return Promise.reject(err);
        }
    }, []);

    useEffect(() => {
        return () => controller && controller.abort();
    }, [controller]);

    return [data, axiosFetch];
}
