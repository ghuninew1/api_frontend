import { FaUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";

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

export default UserCircle;
