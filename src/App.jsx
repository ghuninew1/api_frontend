import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Contact, Login, Register } from "./pages";
import { Error, Root, RouteRoot } from "./components";

export default function App() {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <Error />,
            children: [
                {
                    index: true,
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: (
                        <RouteRoot>
                            <About />
                        </RouteRoot>
                    ),
                },
                {
                    path: "/contact",
                    element: (
                        <RouteRoot>
                            <Contact />
                        </RouteRoot>
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
            ],
        },
    ]);
    return <RouterProvider router={route} />;
}
