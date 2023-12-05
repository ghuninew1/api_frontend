/* eslint-disable react/prop-types */
import { forwardRef } from "react";

function Input(props, ref, ...rest) {
    const {
        type = "text",
        className = "",
        size = "text-base",
        width = "w-full",
        bgColor = "bg-gray-100",
        color = "text-gray-700",
        borderRadius = "rounded-md",
    } = props;
    return (
        <input
            {...rest}
            autoFocus
            ref={ref}
            type={type}
            className={`border-0 outline-none focus:outline-green-500 font-light ${size} p-2 ${width} hover:drop-shadow-xl ${bgColor} ${color} ${borderRadius} ${className}`}
        />
    );
}

Input.displayName = "Input";
const ForwardedInputMain = forwardRef(Input);

export default ForwardedInputMain;
