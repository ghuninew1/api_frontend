import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer";
import { useAuth } from "#contexts/useAuthContext";

export default function RouteRoot() {
    const { isUser } = useAuth();

    return (
        <main className="font-sans bg-gradient-to-t from-slate-50 to-slate-200 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 text-gray-950 dark:text-gray-100">
            <Navbar userMenu={isUser.username ? true : false} />
            {isUser.username && (
                <div className="fixed top-0 left-0 z-50">
                    <SideBar />
                </div>
            )}

            {/* <header className="sticky top-0 z-50"> <Navbar /></header> */}

            <div className="min-h-[calc(100vh-3rem-2.5rem)] md:min-h-[calc(100vh-4rem-2.5rem)] ">
                <Outlet />
            </div>

            <Footer />
        </main>
    );
}
