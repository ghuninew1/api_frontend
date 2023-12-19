import { SideBarIcon } from "./SideBarIcon";
import { navLinks } from "#assets/navLinks";
import PropTypes from "prop-types";

const SideBar = () => {
    return (
        <div className="w-16 mt-16 flex flex-col shadow-lg z-10 transition-all duration-300 ease-in-out origin-left text-sm text-gray-500 dark:text-gray-100">
            {navLinks
                .filter((link) => link.hide !== true)
                .map((link, index) => (
                    <SideBarIcon
                        key={index}
                        {...link}
                        onClick={() => {
                            if (link.text === "LOGOUT") {
                                // SetLogout();
                            } else {
                                return;
                            }
                        }}
                    />
                ))}
            <Divider />
        </div>
    );
};

const Divider = () => (
    <hr className="bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-full mx-2" />
);

SideBar.propTypes = {
    isOpen: PropTypes.bool,
};
export default SideBar;
