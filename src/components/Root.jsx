// import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./";

export default function Root() {
    return (
        <main className="min-h-screen w-full bg-secondary text-white">
            <header className="">
                <Navbar />
            </header>
            <div className="mx-auto md:min-h-[calc(100vh-4rem-2.5rem)] min-h-[calc(100vh-2.75rem-2.5rem)] container">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
}
