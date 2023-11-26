import { forwardRef, memo } from "react";
import PropTypes from "prop-types";

const Input = forwardRef(({ type, className, ...props }, ref) => {
    return (
        <input
            {...props}
            ref={ref && ref}
            type={type ? type : "text"}
            className={`border border-cyan-400/60 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
        />
    );
});

Input.defaultProps = {
    type: "text",
    className: "",
};

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
};

Input.displayName = "Input";

const MemoInput = memo(Input);
export default MemoInput;
