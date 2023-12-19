import {
    FaHome,
    FaFire,
    FaArrowCircleRight,
    FaAddressBook,
} from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import {
    Home,
    TableData,
    Timeline,
    Contact,
    About,
    Login,
    User,
    Signup,
} from "../pages";

const navLinks = [
    {
        icon: <FaHome size="28" />,
        text: "Home",
        to: "/",
        element: <Home />,
    },
    {
        icon: <FaFire size="32" />,
        text: "Teble",
        to: "/table",
        element: <TableData />,
    },
    {
        icon: <BsPlus size="32" />,
        text: "Timeline",
        to: "/timeline",
        element: <Timeline />,
    },

    {
        icon: <FaAddressBook size="20" />,
        text: "About",
        to: "/about",
        element: <About />,
    },

    {
        icon: <FaArrowCircleRight size="22" />,
        text: "Contact",
        to: "/contact",
        element: <Contact />,
    },
];

const navLogin = [
    {
        text: "LOGIN",
        to: "login",
        element: <Login />,
    },
    {
        text: "SIGNUP",
        to: "signup",
        element: <Signup />,
    },
    {
        text: "USER",
        to: "user",
        hide: true,
        element: <User />,
    },
    {
        text: "SETTINGS",
        to: "settings",
        hide: true,
        element: <>Settings</>,
    },
];

export { navLinks, navLogin };
