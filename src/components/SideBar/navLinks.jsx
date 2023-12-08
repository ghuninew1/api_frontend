import { FaHome, FaFire, FaPoo, FaSignOutAlt } from "react-icons/fa";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { Login, Home, TableData, Timeline } from "../../pages";

const navLinks = [
    {
        icon: <FaHome size="28" />,
        text: "HOME",
        to: "/",
        element: <Home />,
    },
    {
        icon: <FaFire size="32" />,
        text: "TABLE",
        to: "/table",
        element: <TableData />,
    },
    {
        icon: <BsPlus size="32" />,
        text: "TIMELINE",
        to: "/timeline",
        element: <Timeline />,
    },

    {
        icon: <BsFillLightningFill size="20" />,
        text: "ORIGINALS",
        to: "/originals",
        element: <>Originals</>,
    },
    {
        icon: <FaPoo size="20" />,
        text: "LIBRARY",
        to: "/library",
        element: <>Library</>,
    },
    {
        icon: <BsGearFill size="22" />,
        text: "SETTINGS",
        to: "/settings",
        element: <>Settings</>,
    },
    {
        icon: <FaSignOutAlt size="22" />,
        text: "LOGOUT",
        to: "#",
    },
    {
        icon: <FaSignOutAlt size="22" />,
        text: "LOGIN",
        to: "/login",
        element: <Login />,
    },
];

export { navLinks };
