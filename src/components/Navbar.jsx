import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMenuOutline, IoClose, IoWater } from "react-icons/io5";
import navbarLink from "../assets/navbarLink.json";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(true);
    };

    return (
        <nav
            className="flex justify-between items-center h-11 md:h-16 text-white relative shadow-lg bg-primary z-30"
            role="navigation"
        >
            <div className="flex justify-between items-center ml-2 md:ml-8">
                <Link to="/">
                    <IoWater className="" size={30} />
                </Link>
            </div>
            <div className="pr-8 md:flex hidden font-sans font-medium text-[18px] gap-4 uppercase">
                {navbarLink
                    .filter((link) => link.id > 0)
                    .map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.url}
                            onClick={handleClose}
                            end={link.url === "/" ? true : false}
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "text-orange-700"
                                    : isActive
                                    ? "text-orange-700 p-2 bg-gray-200 rounded-lg text-center hover:text-orange-700 hover:bg-gray-300 transition-all duration-300 ease-in-out"
                                    : "text-white p-2 hover:text-orange-700 hover:bg-gray-300 rounded-lg text-center transition-all duration-300 ease-in-out"
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
            </div>
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
            <div
                className={`md:hidden items-center w-full absolute top-10 left-0 transition-all duration-300 ease-in-out origin-top  ${
                    isOpen ? "scale-y-0" : "scale-y-100"
                } 
                    }`}
            >
                <div
                    className={`md:hidden flex flex-col justify-center items-center w-full gap-2 font-medium text-base font-sans bg-primary py-2 pt-2 z-30 hover:text-orange-700 transition-all duration-300 ease-in-out uppercase`}
                >
                    {navbarLink.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.url}
                            onClick={handleClose}
                            end={link.url === "/" ? true : false}
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "text-orange-700"
                                    : isActive
                                    ? "text-black p-2 pl-5 bg-orange-700 text-start hover:text-orange-700 hover:bg-gray-300 transition-all duration-300 ease-in-out w-full"
                                    : "text-white p-2 pl-5 hover:text-orange-700 hover:bg-gray-500 text-start transition-all duration-300 ease-in-out w-full"
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
