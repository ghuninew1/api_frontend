import { useState, useCallback } from "react";
import propTypes from "prop-types";

export default function useForm(initialState = {}) {
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

useForm.propTypes = {
    initialState: propTypes.object.isRequired,
};
