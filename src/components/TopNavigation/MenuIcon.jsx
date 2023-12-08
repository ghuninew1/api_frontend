import { IoMenu, IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";

const MenuIcon = ({ isOpen, handleToggle }) => (
    <>
        {/* Mobile menu button*/}
        <div
            className="md:hidden flex justify-end items-center mr-1"
            onClick={handleToggle}
        >
            {isOpen ? (
                <IoMenu
                    size={38}
                    className="cursor-pointer hover:text-orange-700 hover:bg-slate-300 rounded-md transition-all duration-300 ease-in-out"
                />
            ) : (
                <IoCloseSharp
                    size={38}
                    className="cursor-pointer hover:text-orange-700 hover:bg-slate-300 rounded-md transition-all duration-300 ease-in-out"
                />
            )}
        </div>
    </>
);
MenuIcon.propTypes = {
    isOpen: PropTypes.bool,
    handleToggle: PropTypes.func,
};
MenuIcon.defaultProps = {
    isOpen: true,
    handleToggle: () => {},
};

export default MenuIcon;
