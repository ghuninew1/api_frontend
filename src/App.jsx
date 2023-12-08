import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error, RouteRoot, RouteUser } from "./components";
import { useAuth } from "./contexts/useAuth";
import { navLinks } from "./components/SideBar/navLinks";

export default function App() {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <RouteRoot />,
            errorElement: <Error />,
            children: navLinks.map((link) => ({
                path: link.to,
                index: link.to === "/",

                element: <RouteUser>{link.element}</RouteUser>,
            })),
        },
    ]);
    return <RouterProvider router={route} />;
}
