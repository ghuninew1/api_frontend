import { useState, useEffect } from "react";
import api from "../services/api";
import PropTypes from "prop-types";

export function useAxios({ method, url, config = {} }) {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(0);

    const refetch = () => setReload((prev) => prev + 1);

    useEffect(() => {
        //let isMounted = true;
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const res = await api[method.toLowerCase()](url, {
                    ...config,
                    signal: controller.signal,
                });
                res.data && setResponse(res.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        // call the function
        fetchData();

        // useEffect cleanup function
        return () => controller && controller.abort();

        // eslint-disable-next-line
    }, [reload]);

    return [response, error, loading, refetch];
}

useAxios.propTypes = {
    method: PropTypes.string,
    url: PropTypes.string,
    config: PropTypes.object,
};

useAxios.defaultProps = {
    method: "get",
    url: "/",
    config: {},
};
// Path: src/pages/UseAxios.js

export function useAxiosFn() {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); //different!
    const [controller, setController] = useState();

    const axiosFetch = async ({ method, url, config = {} }) => {
        try {
            setLoading(true);
            const ctrl = new AbortController();
            setController(ctrl);
            const res = await api[method.toLowerCase()](url, {
                ...config,
                signal: ctrl.signal || controller.signal,
            });
            res.data && Promise.resolve(setResponse(res.data));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    axiosFetch.propTypes = {
        method: PropTypes.string,
        url: PropTypes.string,
        config: PropTypes.object,
    };

    useEffect(() => {
        // console.log(controller);

        // useEffect cleanup function
        return () => controller && controller.abort();
    }, [controller]);

    return [response, error, loading, axiosFetch];
}

export default useAxios;
