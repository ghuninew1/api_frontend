import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

function useAsyncInternal(func, dependencies, initialLoading = false) {
    const [loading, setLoading] = useState(initialLoading);
    const [error, setError] = useState(false);
    const [value, setValue] = useState([]);

    const execute = useCallback((...params) => {
        setLoading(true);
        return func(...params)
            .then((data) => {
                setValue(data);
                setError(undefined);
                return data;
            })
            .catch((error) => {
                setError(error);
                setValue(undefined);
                return Promise.reject(error);
            })
            .finally(() => {
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    return { loading, error, value, execute };
}

useAsyncInternal.propTypes = {
    func: PropTypes.func,
    dependencies: PropTypes.array,
    initialLoading: PropTypes.bool,
};

export function useAsync(func, dependencies = []) {
    const { execute, ...state } = useAsyncInternal(func, dependencies, true);

    useEffect(() => {
        execute();
    }, [execute]);

    return state;
}

useAsync.propTypes = {
    func: PropTypes.func,
    dependencies: PropTypes.array,
};

export function useAsyncFn(func, dependencies = []) {
    return useAsyncInternal(func, dependencies, false);
}

useAsyncFn.propTypes = {
    func: PropTypes.func,
    dependencies: PropTypes.array,
};

export default useAsync;
