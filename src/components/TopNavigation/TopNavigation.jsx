import { useAuth } from "../../contexts/useAuth";
import { useState } from "react";

import {
    Dropdown,
    Logout,
    ThemeIcon,
    Search,
    BellIcon,
    UserCircle,
    Title,
    MenuIcon,
    Login,
    Register,
} from "./index";

const TopNavigation = () => {
    const { isUser } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex flex-row items-center justify-end gap-1  w-full h-12 md:h-16 m-0 shadow-lg">
            {isUser.isLogIn ? (
                <>
                    <Title />
                    <ThemeIcon />
                    <Search />
                    <BellIcon />
                    <UserCircle onClick={() => setIsOpen(!isOpen)} />
                    <Dropdown isOpen={isOpen} />
                    <MenuIcon />
                </>
            ) : (
                <div className="flex gap-1 items-center">
                    <ThemeIcon />
                    <Login />
                    <Register />
                </div>
            )}
        </div>
    );
};

export default TopNavigation;
