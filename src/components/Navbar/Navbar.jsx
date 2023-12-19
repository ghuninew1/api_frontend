import {
    Dropdown,
    MenuIcon,
    UserCircle,
    ThemeIcon,
    UserDropdown,
} from "./Navbarcon";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import { IoLogInOutline, IoPersonAddSharp } from "react-icons/io5";
// import { cx } from "#utils/utils";
import { navLogin } from "#assets/navLinks";
import PropTypes from "prop-types";
import { cx } from "#utils/utils";

const Navbar = ({ userMenu = false }) => {
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState(false);

    return (
        <nav className="relative flex flex-row items-center">
            {userMenu ? (
                <div className="flex  w-full h-12 md:h-16  shadow-lg">
                    <div className="flex">
                        <Dropdown
                            isOpen={menu}
                            onClick={() => setMenu(false)}
                        />

                        <MenuIcon
                            onClick={() => setMenu(!menu)}
                            openMenu={menu}
                        />
                    </div>

                    <div className="relative flex flex-row items-center justify-end gap-3 w-full h-12 md:h-16 ">
                        <ThemeIcon />
                        <UserCircle onClick={() => setOpen(!open)} />
                        <UserDropdown
                            openDropdown={open}
                            onClick={() => setOpen(false)}
                        />
                    </div>
                </div>
            ) : (
                <div className="relative flex flex-row items-center justify-end gap-2 w-full h-12 md:h-16 shadow-lg rounded-lg ">
                    <ThemeIcon />
                    {navLogin
                        .filter((link) => link.hide !== true)
                        .map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.to}
                                end={link.to === "/"}
                                className={({ isActive }) =>
                                    cx(
                                        "first-of-type:ml-5 flex flex-row items-center justify-center gap-3 py-2 px-3 font-semibold transition-all duration-300 ease-in-out hover:bg-neutral-600 hover:bg-opacity-20 rounded-lg",
                                        isActive
                                            ? "bg-gray-500 bg-opacity-20"
                                            : "bg-transparent"
                                    )
                                }
                            >
                                {/* {link.icon} */}

                                <span className="inline-block scale-75">
                                    {link.icon}
                                </span>
                                {link.text}
                            </NavLink>
                        ))}
                </div>
            )}
        </nav>
    );
};

Navbar.propTypes = {
    userMenu: PropTypes.bool,
};

export default Navbar;
