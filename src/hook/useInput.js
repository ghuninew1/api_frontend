import { useState } from "react";

export function useInput(initValue) {
    const [value, setValue] = useState(initValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    const inputProps = {
        value: value,
        onChange: handleChange,
    };

    return inputProps;
}

export default useInput;
