import PropTypes from "prop-types";

const Button = ({
    text,
    type,
    className,
    size,
    width,
    bgColor,
    bgHoverColor,
    color,
    colorHover,
    borderRadius,
    disabled,
    ...props
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`${size} p-3 ${width} border-0 hover:drop-shadow-xl ${bgColor}  ${color} ${borderRadius} ${className} ${bgHoverColor} ${colorHover}`}
            {...props}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.any,
    type: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
    width: PropTypes.string,
    bgColor: PropTypes.string,
    bgHoverColor: PropTypes.string,
    color: PropTypes.string,
    colorHover: PropTypes.string,
    borderRadius: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    text: "Button",
    type: "button",
    className: "",
    size: "text-base",
    width: "w-full",
    bgColor: "bg-blue-400",
    bgHoverColor: "hover:bg-blue-600",
    color: "text-white",
    colorHover: "hover:text-gray-100",
    borderRadius: "rounded-md",
    disabled: false,
};

export default Button;
