import { useMemo, useState, useEffect, useCallback } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const getAxios = async (url, options = {}) => {
    const { method = "get", body = null, headers = {} } = options;

    return await axios({
        method,
        url,
        data: body,
        headers,
    });
};
getAxios.propTypes = {
    url: PropTypes.string.isRequired,
    options: PropTypes.shape({
        method: PropTypes.string,
        headers: PropTypes.object,
        body: PropTypes.object,
    }),
};

export const useAxios = (url, config) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { method = "get", body = null, headers = {} } = config;

    const fetchData = useCallback(async () => {
        if (!url) return;
        setLoading(true);
        await getAxios(url, { method, body, headers })
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url, method, body, headers]);

    useEffect(() => {
        if (url) fetchData();

        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [method, url]);

    const reFetch = useCallback(() => {
        fetchData();
    }, [fetchData]);

    return useMemo(
        () => ({ data, error, loading, reFetch }),
        [data, error, loading, reFetch]
    );
    // return { data, error, loading, reFetch };
};

useAxios.propTypes = {
    url: PropTypes.string.isRequired,
    config: PropTypes.shape({
        method: PropTypes.string,
        headers: PropTypes.object,
        body: PropTypes.object,
    }),
};

export default useAxios;
