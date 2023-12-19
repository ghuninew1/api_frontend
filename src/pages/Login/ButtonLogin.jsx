import Button from "#components/Button";
import { cx } from "#utils/utils";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import useHover from "#hook/useHover";
import PropTypes from "prop-types";

export default function ButtonLogin({
    to,
    icon,
    children,
    text,
    className,
    type,
    ...rest
}) {
    const [hoverRef, isHovered] = useHover();
    return (
        <Link to={to && to} ref={hoverRef}>
            <Button
                {...rest}
                type={type}
                variant="no"
                className={cx("w-full overflow-hidden relative", className)}
            >
                {icon && (
                    <span className="absolute top-1/2 left-2 transform -translate-y-1/2">
                        {icon}
                    </span>
                )}
                {text && <p className="shadow-sm stroke-gray-600">{text}</p>}
                {children && children}
                {isHovered && (
                    <AiOutlineArrowRight
                        size={25}
                        className="absolute right-2 animate-[arrowIdle_1s_infinite_ease-in-out]"
                    />
                )}
            </Button>
        </Link>
    );
}

ButtonLogin.propTypes = {
    to: PropTypes.string,
    icon: PropTypes.element,
    children: PropTypes.element,
    text: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
};
