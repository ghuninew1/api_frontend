const mainLinks = [
    {
        name: "Home",
        to: "/",
    },
    // {
    //     name: "About",
    //     to: "/about",
    // },
    // {
    //     name: "Contact",
    //     to: "/contact",
    // },
    {
        name: "Report Com",
        to: "/report",
    },
];
const loginLinks = [
    {
        name: "Login",
        to: "/login",
    },
    {
        name: "Register",
        to: "/register",
    },
];

const dropdownlist = [
    {
        id: 1,
        name: "Profile",
        to: "/profile",
    },
    {
        id: 2,
        name: "Logout",
        to: "/login",
    },
];

export const navLinks = {
    mainLinks,
    loginLinks,
    dropdownlist,
};

export default navLinks;
