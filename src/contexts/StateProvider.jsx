import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

export const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};
export const ContextState = () => useContext(StateContext);

const StateProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode", e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem("colorMode", color);
    };

    const handleClick = (clicked) =>
        setIsClicked({ ...initialState, [clicked]: true });

    return (
        <StateContext.Provider
            value={{
                currentColor,
                currentMode,
                activeMenu,
                screenSize,
                setScreenSize,
                handleClick,
                isClicked,
                initialState,
                setIsClicked,
                setActiveMenu,
                setCurrentColor,
                setCurrentMode,
                setMode,
                setColor,
                themeSettings,
                setThemeSettings,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

StateProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default StateProvider;
