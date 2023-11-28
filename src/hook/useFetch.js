import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios(url, options);
                setData(res.data);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    const reFetch = () => {
        setData([]);
    };

    return { data, error, loading, reFetch };
};

useFetch.propTypes = {
    url: PropTypes.string.isRequired,
    object: PropTypes.shape({
        method: PropTypes.string,
        headers: PropTypes.object,
        body: PropTypes.object,
    }),
};

export default useFetch;
