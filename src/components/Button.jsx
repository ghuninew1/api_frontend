import { memo } from "react";
import PropTypes from "prop-types";

const Button = ({ type, className, ...props }) => (
    <button
        {...props}
        type={type ? type : "button"}
        className={`border-2 border-cyan-400/60 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent inline-block text-base font-medium uppercase leading-normal hover:shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:border-transparent
        ${className}`}
    />
);

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
};
const MemoButton = memo(Button);
export default MemoButton;
