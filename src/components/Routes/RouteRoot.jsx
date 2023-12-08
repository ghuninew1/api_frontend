import { Outlet } from "react-router-dom";
import {
    // Navbar,
    Footer,
    SideBar,
    // ChannelBar,
    // ContentContainer,
    TopNavigation,
} from "..";

export default function Root() {
    return (
        <main className="antialiased bg-gray-300 dark:bg-gray-700">
            <div className="flex min-h-screen flex-col md:overflow-hidden pl-10">
                <TopNavigation />
                <SideBar />

                {/* <header className="sticky top-0 z-50"> <Navbar /></header> */}

                <div className="mx-auto w-full md:min-h-[calc(100vh-4rem-2.5rem)] min-h-[calc(100vh-2.75rem-2.5rem)]">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </main>
    );
}
