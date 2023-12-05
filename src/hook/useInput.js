import { useState, useCallback } from "react";

function useInput(initialValue = "") {
    const [value, setValue] = useState(initialValue);

    const onChange = useCallback((event) => {
        const { value } = event.target;
        value && setValue(value);
    }, []);

    const clearValue = useCallback(
        () => setValue(initialValue || ""),
        [initialValue]
    );

    return [value, onChange, clearValue];
}

export default useInput;

//Usage
// Path: src/components/MyComponent.js
// import useInput from "../hooks/useInput";
