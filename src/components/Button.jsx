// import { forwardRef } from "react";
import PropTypes from "prop-types";

export const Button = ({
    text,
    type,
    className,
    size,
    width,
    bgColor,
    color,
    borderRadius,
    ...props
}) => {
    return (
        <button
            {...props}
            type={type}
            className={`${size} p-3 ${width} hover:drop-shadow-xl ${bgColor} ${color} ${borderRadius} ${className}`}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
    width: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    borderRadius: PropTypes.string,
};

Button.defaultProps = {
    text: "Button",
    type: "button",
    className: "",
    size: "text-base",
    width: "w-full",
    bgColor: "bg-blue-400",
    color: "text-white",
    borderRadius: "rounded-md",
};

export default Button;
