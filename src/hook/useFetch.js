import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

export function useFetch(url, config = null) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const datas = useMemo(() => data, [data]);

    const axiosInstance = useMemo(() => {
        const instance = axios.create({
            baseURL: url,
        });
        return instance;
    }, [url]);

    if (config) {
        axiosInstance.interceptors.request.use(
            (config) => config,
            (error) => Promise.reject(error)
        );
    }

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            axiosInstance.defaults.timeout = 5000;
            const response = await axiosInstance({
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                ...config,
            });
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [axiosInstance, config]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const refetch = useCallback(() => {
        fetchData();
    }, [fetchData]);

    return { datas, loading, error, refetch };
}

export default useFetch;
