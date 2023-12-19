import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Root from "./components/Root";
import RouteAuth from "./components/RouteAuth";
import RouteUser from "./components/RouteUser";
import { navLinks, navLogin } from "./assets/navLinks";
import { Suspense } from "react";
import Loading from "#components/Loading";
import { LoginLine, LoginFacebook, Logout, LoginGoogle } from "./pages";

export default function App() {
    const routes = navLinks.map((link) => ({
        path: link.to,
        index: link.to === "/",
        element: (
            <Suspense fallback={<Loading />}>
                <RouteAuth>{link.element}</RouteAuth>
            </Suspense>
        ),
    }));

    const routesLogin = navLogin.map((link) => ({
        path: link.to,
        element: (
            <Suspense fallback={<Loading />}>
                <RouteUser>{link.element}</RouteUser>
            </Suspense>
        ),
    }));

    const route = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <Error />,
            children: [
                ...routes,
                ...routesLogin,
                {
                    path: "auth/line",
                    element: <LoginLine />,
                },
                {
                    path: "auth/facebook",
                    element: <LoginFacebook />,
                },
                {
                    path: "logout",
                    element: <Logout />,
                },
                {
                    path: "auth/google",
                    element: <LoginGoogle />,
                },
            ],
        },
    ]);

    return (
        <RouterProvider router={route} future={{ v7_startTransition: true }} />
    );
}
