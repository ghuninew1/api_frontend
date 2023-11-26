import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Contact, Login, Register } from "./pages";
import { Error, Root } from "./components";

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
                    element: <About />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
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
