import { useEffect } from "react";
import { useToggle } from "./useToggle";

export const useDarkMode = () => {
    const [theme, toggleTheme] = useToggle("dark-theme");
    const isEnabled = typeof enabledState === "undefined" && theme;

    useEffect(() => {
        const className = "dark";
        const bodyClass = window.document.body.classList;

        isEnabled ? bodyClass.add(className) : bodyClass.remove(className);

        return () => {
            bodyClass.remove(className);
        };
    }, [isEnabled]);

    return [theme, toggleTheme];
};

export default useDarkMode;
