import SideBarIcon from "./SideBarIcon";
import { useAuth } from "../../contexts/useAuth";
import { navLinks } from "./navLinks";

const SideBar = () => {
    const { isUser, SetLogout } = useAuth();

    return (
        isUser.isLogIn && (
            <div className="fixed top-0 left-0 min-h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg z-10 transition-all duration-300 ">
                {navLinks
                    .filter((link) => link.text !== "LOGIN")
                    .map((link, index) => (
                        <SideBarIcon
                            key={index}
                            {...link}
                            onClick={link.text === "LOGOUT" ? SetLogout : null}
                        />
                    ))}
                <Divider />
            </div>
        )
    );
};

const Divider = () => (
    <hr className="bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-full mx-2" />
);

export default SideBar;
