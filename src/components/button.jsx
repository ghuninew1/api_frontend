import { cx } from "../utils/utils";
import PropTypes from "prop-types";

export function Button({
    children,
    className,
    outline,
    type,
    bgColor,
    textColor,
    ...rest
}) {
    return (
        <button
            {...rest}
            type={type || "button"}
            className={cx(
                "inline-flex items-center justify-center gap-2",
                "rounded-md px-3 py-2 font-mono font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",

                bgColor ? `bg-${bgColor}-500` : "bg-blue-600 dark:bg-blue-700",
                bgColor
                    ? `hover:bg-${bgColor}-800`
                    : "hover:bg-blue-800 dark:hover:bg-blue-800",
                bgColor
                    ? `focus-visible:ring-${bgColor}-500`
                    : "focus-visible:ring-blue-500",
                bgColor ? `focus-visible:ring-offset-${bgColor}-200` : "",
                textColor
                    ? `text-${textColor}-50`
                    : "dark:text-gray-950 text-gray-200",
                textColor
                    ? `hover:text-${textColor}-50`
                    : "hover:text-gray-300  dark:hover:text-gray-300",
                textColor ? `focus-visible:ring-${textColor}-500` : "",
                outline
                    ? "border-2 border-blue-600 hover:border-blue-800 focus-visible:border-blue-500"
                    : "",

                className
            )}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    outline: PropTypes.bool,
    type: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
};

Button.defaultProps = {
    className: "",
    outline: false,
    type: "button",
    bgColor: "",
    textColor: "",
};
