import { forwardRef } from "react";
import PropTypes from "prop-types";

const Input = forwardRef(
    (
        {
            type,
            className,
            size,
            width,
            bgColor,
            color,
            borderRadius,
            ...props
        },
        ref
    ) => {
        return (
            <input
                {...props}
                ref={ref}
                type={type}
                className={` ${size} p-2 ${width} hover:drop-shadow-xl ${bgColor} ${color} ${borderRadius} ${className}`}
            />
        );
    }
);

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
    width: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    borderRadius: PropTypes.string,
};
Input.defaultProps = {
    type: "text",
    className: "",
    size: "text-base",
    width: "w-full",
    bgColor: "bg-blue-400/10",
    color: "text-white",
    borderRadius: "rounded-md",
};

Input.displayName = "Input";

export default Input;
