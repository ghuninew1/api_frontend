import { forwardRef, useImperativeHandle, useRef } from "react";

function TextInput(props, ref) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        reset: () => {
            if (!localRef.current) return;

            localRef.current.value = "";
            localRef.current?.focus();
        },
    }));

    return <input {...props} ref={localRef} />;
}

const ForwardedTextInput = forwardRef(TextInput);
ForwardedTextInput.displayName = "TextInput";
export default ForwardedTextInput;
