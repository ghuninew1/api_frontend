import {
    useCallback,
    useEffect,
    useSyncExternalStore,
    useState,
    useMemo,
    useRef,
} from "react";
import PropTypes from "prop-types";

function dispatchStorageEvent(key, newValue) {
    window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
}

const setLocalStorageItem = (key, value) => {
    const stringifiedValue = JSON.stringify(value);
    window.localStorage.setItem(key, stringifiedValue);
    dispatchStorageEvent(key, stringifiedValue);
};

const removeLocalStorageItem = (key) => {
    window.localStorage.removeItem(key);
    dispatchStorageEvent(key, null);
};

const getLocalStorageItem = (key) => {
    return window.localStorage.getItem(key);
};

const useLocalStorageSubscribe = (callback) => {
    window.addEventListener("storage", callback);
    return () => window.removeEventListener("storage", callback);
};

const getLocalStorageServerSnapshot = () => {
    throw Error("useLocalStorage is a client-only hook");
};

export function useLocalStorage(key, initialValue) {
    const getSnapshot = () => getLocalStorageItem(key);

    const store = useSyncExternalStore(
        useLocalStorageSubscribe,
        getSnapshot,
        getLocalStorageServerSnapshot
    );

    const setState = useCallback(
        (v) => {
            try {
                const nextState =
                    typeof v === "function" ? v(JSON.parse(store)) : v;

                if (nextState === undefined || nextState === null) {
                    removeLocalStorageItem(key);
                } else {
                    setLocalStorageItem(key, nextState);
                }
            } catch (e) {
                console.warn(e);
            }
        },
        [key, store]
    );

    useEffect(() => {
        if (
            getLocalStorageItem(key) === null &&
            typeof initialValue !== "undefined"
        ) {
            setLocalStorageItem(key, initialValue);
        }
    }, [key, initialValue]);

    return [store ? JSON.parse(store) : initialValue, setState];
}

export function useObserver({ threshold, root, rootMargin }) {
    const [entry, setEntry] = useState(false);

    const observer = useMemo(() => {
        if (typeof IntersectionObserver !== "undefined") {
            return new IntersectionObserver(
                ([entry]) => {
                    setEntry(entry?.isIntersecting);
                },
                {
                    threshold,
                    root,
                    rootMargin,
                }
            );
        }
    }, [threshold, root, rootMargin]);

    const ref = useCallback(
        (node) => {
            if (observer) {
                observer.disconnect();
            }

            if (node) {
                observer?.observe(node);
            }
        },
        [observer]
    );

    return [ref, entry];
}

useObserver.propTypes = {
    threshold: PropTypes.number,
    root: PropTypes.object,
    rootMargin: PropTypes.string,
};

useObserver.defaultProps = {
    threshold: 0,
    root: null,
    rootMargin: "0px",
};

export function useList(defaultList = []) {
    const [list, setList] = useState(defaultList);

    const set = useCallback((l) => {
        setList(l);
    }, []);

    const push = useCallback((element) => {
        setList((l) => [...l, element]);
    }, []);

    const removeAt = useCallback((index) => {
        setList((l) => [...l.slice(0, index), ...l.slice(index + 1)]);
    }, []);

    const insertAt = useCallback((index, element) => {
        setList((l) => [...l.slice(0, index), element, ...l.slice(index)]);
    }, []);

    const updateAt = useCallback((index, element) => {
        setList((l) => l.map((e, i) => (i === index ? element : e)));
    }, []);

    const clear = useCallback(() => setList([]), []);

    return [list, { set, push, removeAt, insertAt, updateAt, clear }];
}

export function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    const inputProps = {
        value: value,
        onChange: handleChange,
    };

    return inputProps;
}

export const useFatch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const loadData = async () => {
        try {
            setLoading(true);
            setErrors(null);
            setData(null);

            const result = await fetch(url);
            const json = await result.json();
            setData(json);
        } catch (err) {
            setErrors(err.toString());
        } finally {
            setLoading(false);
        }
    };

    const ref = useRef(null);
    ref.current = () => {
        loadData();
    };
    useEffect(() => {
        ref.current();
    }, []);

    return [data, loading, errors];
};

export function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue);

    function push(element) {
        setArray((a) => [...a, element]);
    }

    function filter(callback) {
        setArray((a) => a.filter(callback));
    }

    function update(index, newElement) {
        setArray((a) => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length),
        ]);
    }

    function remove(index) {
        setArray((a) => [
            ...a.slice(0, index),
            ...a.slice(index + 1, a.length),
        ]);
    }

    function clear() {
        setArray([]);
    }

    return { array, set: setArray, push, filter, update, remove, clear };
}
