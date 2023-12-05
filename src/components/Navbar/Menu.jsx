import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Menu = ({ onClick, to, className, classNameActive, name, ...rest }) => {
    const location = useLocation();
    return (
        <NavLink
            {...rest}
            to={to}
            onClick={onClick}
            end={to === "/" ? true : false}
            aria-current={location.pathname === to ? "page" : undefined}
            className={({ isActive }) =>
                isActive
                    ? `text-slate-200 px-3 py-2 bg-gray-600/40 rounded-lg text-center hover:text-black hover:bg-green-700 transition-all duration-300 ease-in-out ${classNameActive}`
                    : `text-white px-3 py-2 hover:text-black hover:bg-green-700 rounded-lg text-center transition-all duration-300 ease-in-out ${className}`
            }
        >
            {name}
        </NavLink>
    );
};

Menu.propTypes = {
    onClick: PropTypes.func,
    to: PropTypes.string,
    className: PropTypes.string,
    classNameActive: PropTypes.string,
    name: PropTypes.string,
};

Menu.defaultProps = {
    onClick: () => {},
    to: "/",
    className: "",
    classNameActive: "",
    name: "Menu",
};

export default Menu;
