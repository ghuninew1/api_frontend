import { memo } from "react";
import PropTypes from "prop-types";

const Input = ({ type, className, ...props }) => (
    <input
        {...props}
        type={type ? type : "text"}
        className={`border border-cyan-400/60 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    />
);

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
};
const InputMemo = memo(Input);
export default InputMemo;
