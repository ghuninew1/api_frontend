import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { cx } from "../../utils/utils";

const SideBarIcon = ({ icon, text = "tooltip 💡", to, ...props }) => (
    <div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-400 hover:bg-green-600 dark:bg-gray-800 text-green-500 hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group">
        <NavLink
            {...props}
            to={to || "/"}
            end={to === "/" ? true : false}
            className={({ isActive }) =>
                cx(
                    "flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-400 hover:bg-green-600 dark:bg-gray-800 text-green-500 hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group",
                    isActive ? "text-red-500 dark:text-red-500" : ""
                )
            }
        >
            {icon}
        </NavLink>
        <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-mdtext-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            {text}
        </span>
    </div>
);

SideBarIcon.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string,
    to: PropTypes.string,
};

export default SideBarIcon;
