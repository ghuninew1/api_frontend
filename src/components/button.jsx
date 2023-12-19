import { cx } from "#utils/utils";
import PropTypes from "prop-types";
import { forwardRef, useState } from "react";

const buttonVariants = ({ variant, size, className }) => {
    return cx(
        "focus:outline-none focus:shadow-outline focus:ring-gray-200 focus:ring-2",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-opacity-50",
        "inline-flex items-center justify-center gap-3 font-semibold rounded-md shadow-md select-none cursor-pointer",
        variants.variant[variant],
        variants.size[size],
        className
    );
};

const variants = {
    variant: {
        primary:
            "text-white border border-transparent hover:shadow-outline-blue bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-700",
        default:
            "border border-transparent bg-gray-500 hover:bg-gray-400 focus:bg-gray-600 active:bg-gray-700",
        outline:
            "text-black bg-transparent border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 active:text-gray-700 active:bg-gray-50",

        secondary:
            "text-gray-700 border border-gray-300 hover:text-gray-600 hover:border-gray-400 focus:border-gray-300 active:text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500 active:bg-gray-200",
        success:
            "text-white border border-transparent focus:border-green-700 bg-green-600 hover:bg-green-700 focus:ring-green-500 active:bg-green-700",
        danger: "text-white border border-transparent focus:border-red-700 bg-red-600 hover:bg-red-700 focus:ring-red-500 active:bg-red-700",
        warning:
            "text-white border border-transparent focus:border-yellow-700 bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 active:bg-yellow-700",
        info: "text-white border border-transparent focus:border-cyan-600 bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-400 active:bg-cyan-600",
        no: "",
    },
    size: {
        sm: "px-2.5 py-2 text-xs ",
        default: "px-4 py-3 text-sm ",
        lg: "px-6 py-4 text-base ",
    },
};

const Comp = ({
    asChild = false,
    type,
    children,
    loading = false,
    ...props
}) => {
    if (asChild) {
        return children;
    }

    return (
        <button
            {...props}
            type={type}
            onMouseDown={(e) => {
                e.currentTarget.animate(
                    [
                        // keyframes
                        { transform: "scale(0.95)" },
                    ],
                    {
                        // timing options
                        duration: 150,
                        easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    }
                );
            }}
        >
            {loading && (
                <div
                    className="inline-block h-[20px] w-[20px] animate-spin rounded-full m-0 border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                ></div>
            )}
            {children}
        </button>
    );
};
Comp.propTypes = {
    asChild: PropTypes.bool,
    children: PropTypes.node,
    type: PropTypes.string,
    loading: PropTypes.bool,
};

const ButtonMain = ({ children, type, className, size, variant, ...props }) => {
    return (
        <Comp
            className={cx(
                className
                    ? buttonVariants({
                          size: size,
                          variant: variant,
                          className: className,
                      })
                    : buttonVariants({
                          size: size,
                          variant: variant,
                      })
            )}
            type={type || "button"}
            {...props}
        >
            {children}
        </Comp>
    );
};

ButtonMain.displayName = "Button";
ButtonMain.propTypes = {
    variant: PropTypes.any || PropTypes.oneOf(Object.keys(variants.variant)),
    size: PropTypes.oneOf(Object.keys(variants.size)),
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
};

ButtonMain.defaultProps = {
    variant: "default",
    size: "default",
    className: "",
    type: "button",
};

export const Button = forwardRef((props, ref) => {
    const { children, ...otherProps } = props;
    return (
        <ButtonMain {...otherProps} ref={ref}>
            {children}
        </ButtonMain>
    );
});
export default Button;
