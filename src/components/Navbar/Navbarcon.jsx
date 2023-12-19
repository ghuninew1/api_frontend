import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import useDarkMode from "#hook/useDarkMode";
import PropTypes from "prop-types";
import { navLinks, navLogin } from "#assets/navLinks";
import { cx } from "#utils/utils";

const MenuIcon = ({ onClick = () => {}, openMenu = false }) => {
    return (
        <div
            className={cx(
                "md:hidden transition-all duration-300 ease-in-out transform absolute z-20",
                openMenu ? "translate-x-[10rem]" : "translate-x-0"
            )}
        >
            {!openMenu ? (
                <IoMenu
                    size={40}
                    className="cursor-pointer hover:text-orange-700 hover:bg-slate-300 rounded-md transition-all duration-300 ease-in-out"
                    onClick={onClick}
                />
            ) : (
                <IoCloseSharp
                    size={40}
                    className="cursor-pointer hover:text-orange-700 hover:bg-slate-300 rounded-md transition-all duration-300 ease-in-out"
                    onClick={onClick}
                />
            )}
        </div>
    );
};
MenuIcon.propTypes = {
    onClick: PropTypes.func,
    openMenu: PropTypes.bool,
};

const UserCircle = ({ onClick = () => {} }) => (
    <div className="relative" onClick={onClick}>
        <FaUserCircle
            size="35"
            className="first:ml-auto first:mr-4 text-gray-500 mr-3 ml-4 transition duration-300 ease-in-out  hover:text-pink-400 cursor-pointer"
        />
        <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>
);
UserCircle.propTypes = {
    onClick: PropTypes.func,
};

const Dropdown = ({ isOpen = true, onClick = () => {} }) => {
    return (
        <div
            className={cx(
                " w-40 min-h-screen rounded-md shadow-lg z-30 ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800",
                isOpen ? "scale-x-100" : "scale-x-0 w-0",
                "transition-all duration-300 ease-in-out origin-left text-sm text-gray-500 dark:text-gray-100"
            )}
        >
            {navLinks
                .filter((link) => link.hide !== true)
                .map((link, index) => (
                    <Link
                        key={index}
                        to={link.to}
                        onClick={onClick}
                        className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        {link.text}
                    </Link>
                ))}
        </div>
    );
};

Dropdown.propTypes = {
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
};

const ThemeIcon = () => {
    const [theme, toggleTheme] = useDarkMode();

    return (
        <span onClick={toggleTheme} className="scale-90">
            {theme ? (
                <FaSun
                    size="20"
                    className="text-gray-500 transition duration-300 ease-in-out  hover:text-pink-400 cursor-pointer"
                />
            ) : (
                <FaMoon
                    size="20"
                    className="text-gray-500 transition duration-300 ease-in-out  hover:text-pink-400 cursor-pointer"
                />
            )}
        </span>
    );
};

function UserDropdown({ openDropdown = false, onClick = () => {} }) {
    return (
        <div
            className={cx(
                "absolute top-[3rem] md:top-[4rem] right-2 rounded-md shadow-lg z-30 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5  transition-all duration-300 ease-in-out origin-top text-sm text-gray-500 dark:text-gray-100",
                openDropdown ? "scale-y-100 " : "scale-y-0"
            )}
        >
            {navLogin
                .filter((link) => link.hide === true)
                .map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.to}
                        end={link.to === "/"}
                        onClick={onClick}
                        className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        {link.text}
                    </NavLink>
                ))}
            <Link
                to={"/logout"}
                className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
                Logout
            </Link>
        </div>
    );
}
UserDropdown.propTypes = {
    openDropdown: PropTypes.bool,
    onClick: PropTypes.func,
};

export { MenuIcon, UserCircle, Dropdown, ThemeIcon, UserDropdown };
