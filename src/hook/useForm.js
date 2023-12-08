import { useState, useCallback } from "react";
import propTypes from "prop-types";

export function useLogin(initialState = {}) {
    const [form, setForm] = useState(initialState);

    const handleInputChange = useCallback(({ target }) => {
        setForm((form) => ({
            ...form,
            [target.name]: target.value,
        }));
    }, []);

    const reset = useCallback(() => {
        setForm(initialState);
    }, [initialState]);

    return [form, handleInputChange, reset];
}

useLogin.propTypes = {
    initialState: propTypes.object.isRequired,
};

// Usage
// Path: src/pages/Login.js
