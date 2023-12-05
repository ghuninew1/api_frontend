import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "..";

export default function Root() {
    return (
        <main className="min-h-screen w-full text-black bg-neutral-500">
            <header className="sticky top-0 z-50">
                <Navbar />
            </header>
            <div className="mx-auto md:min-h-[calc(100vh-4rem-2.5rem)] min-h-[calc(100vh-2.75rem-2.5rem)]">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
}
