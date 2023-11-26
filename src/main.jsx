import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./contexts/AuthContextProvider";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </StrictMode>
);
