import PropTypes from "prop-types";
import { useAuth } from "../../contexts/useAuth";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen = true }) => {
    const { isUser, SetLogout } = useAuth();
    return (
        <div
            className={`${
                isUser.isLogIn ? "block" : "hidden"
            } absolute top-[3rem] right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-30 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 ${
                isOpen ? "scale-y-100" : "scale-y-0"
            } transition duration-300 ease-in-out origin-top text-sm text-gray-500 dark:text-gray-100`}
        >
            <Link
                to="/profile"
                className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                Profile
            </Link>
            <Link
                to="/settings"
                className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                Settings
            </Link>
            <Link
                onClick={() => SetLogout()}
                className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                Sign out
            </Link>
        </div>
    );
};
Dropdown.propTypes = {
    isOpen: PropTypes.bool,
};

export default Dropdown;
