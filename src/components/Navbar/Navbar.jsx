import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMenuOutline, IoClose, IoWater } from "react-icons/io5";
import { navLinks } from "../../assets/navLinks";
import useAuth from "../../contexts/useAuth";
import Menu from "./Menu";
import Dropdown from "./dropdown";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const [isDropdown, setIsDropdown] = useState(false); // [false, setDropdown
    const { isUser, SetLogout } = useAuth();
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(true);
        setIsDropdown(false);
    };

    return (
        <nav className=" z-30 bg-slate-700">
            <div className="mx-auto max-w-7xl px-2 md:px-6">
                <div className="relative flex h-11 md:h-16 items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <div
                            className="md:hidden flex justify-end items-center mr-1"
                            onClick={handleToggle}
                        >
                            {isOpen ? (
                                <IoMenuOutline
                                    size={38}
                                    className="cursor-pointer hover:text-orange-700 hover:bg-slate-300 rounded-md transition-all duration-300 ease-in-out"
                                />
                            ) : (
                                <IoClose
                                    size={38}
                                    className="cursor-pointer hover:text-orange-700 hover:bg-slate-300 rounded-md transition-all duration-300 ease-in-out"
                                />
                            )}
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-start md:items-center md:justify-between">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to="/">
                                <img src="/favicon.avif" alt="logo" />
                            </Link>
                        </div>

                        {/* Links */}
                        {isUser.isLogIn && (
                            <div className="hidden md:block">
                                <div className="flex space-x-4">
                                    {navLinks.mainLinks.map((link, index) => (
                                        <Menu
                                            key={index}
                                            to={link.to}
                                            onClick={handleClose}
                                            name={link.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Profile dropdown */}
                    {isUser.isLogIn ? (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:pr-0">
                            {/* Profile dropdown */}

                            <div className="ml-3 relative">
                                <button
                                    onClick={() => setIsDropdown(!isDropdown)}
                                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />

                                    <IoWater className="h-8 w-8 m-1" />
                                </button>

                                {/* Dropdown menu, show/hide based on menu state. */}
                                {isDropdown && (
                                    <div className="absolute right-0 top-10 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                                        {navLinks.dropdownlist.map(
                                            (item, index) => (
                                                <Dropdown
                                                    key={index}
                                                    name={item.name}
                                                    to={item.to}
                                                    onClick={() => {
                                                        if (
                                                            item.name ===
                                                            "Logout"
                                                        ) {
                                                            SetLogout();
                                                            setIsDropdown(
                                                                false
                                                            );
                                                            navigate("/");
                                                        } else {
                                                            setIsDropdown(
                                                                false
                                                            );
                                                        }
                                                    }}
                                                />
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navLinks.loginLinks.map((link, index) => (
                                    <Menu
                                        key={index}
                                        to={link.to}
                                        name={link.name}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}

            <div
                className={`md:hidden items-center w-full absolute top-10 left-0 transition-all duration-300 ease-in-out origin-top  ${
                    isOpen ? "scale-y-0" : "scale-y-100"
                } 
                    }`}
            >
                <div
                    className={`md:hidden flex flex-col justify-center items-center w-full gap-2 tracking-wider font-medium text-base font-sans bg-primary py-2 pt-2 z-30 hover:text-orange-700 transition-all duration-300 ease-in-out uppercase`}
                >
                    {isUser.isLogIn
                        ? navLinks.mainLinks.map((link, index) => (
                              <Menu
                                  key={index}
                                  to={link.to}
                                  name={link.name}
                                  className={"w-full"}
                                  classNameActive={"w-full"}
                                  onClick={handleClose}
                              />
                          ))
                        : navLinks.loginLinks.map((link, index) => (
                              <Menu
                                  key={index}
                                  to={link.to}
                                  name={link.name}
                                  className={"w-full"}
                                  classNameActive={"w-full"}
                                  onClick={handleClose}
                              />
                          ))}
                </div>
            </div>
        </nav>
    );
}
