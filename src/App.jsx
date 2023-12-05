import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    Home,
    About,
    Contact,
    Login,
    Register,
    UserProfile,
    Report,
} from "./pages";
import { Error, RouteRoot, RouteProtected } from "./components";

export default function App() {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <RouteRoot />,
            errorElement: <Error />,
            children: [
                {
                    index: true,
                    path: "/",
                    element: (
                        <RouteProtected>
                            <Home />
                        </RouteProtected>
                    ),
                },
                {
                    path: "/about",
                    element: (
                        <RouteProtected>
                            <About />
                        </RouteProtected>
                    ),
                },
                {
                    path: "/contact",
                    element: (
                        <RouteProtected>
                            <Contact />
                        </RouteProtected>
                    ),
                },
                {
                    path: "/report",
                    element: (
                        <RouteProtected>
                            <Report />
                        </RouteProtected>
                    ),
                },
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/register",
                    element: <Register />,
                },
                {
                    path: "/profile",
                    element: (
                        <RouteProtected>
                            <UserProfile />
                        </RouteProtected>
                    ),
                },
            ],
        },
    ]);
    return <RouterProvider router={route} />;
}
