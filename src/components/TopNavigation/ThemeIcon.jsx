import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../../hook/useDarkMode";

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);

    return (
        <span onClick={handleMode}>
            {darkTheme ? (
                <FaSun
                    size="24"
                    className="first:ml-auto first:mr-4 text-gray-500 mr-3 ml-4 transition duration-300 ease-in-out  hover:text-pink-400 cursor-pointer"
                />
            ) : (
                <FaMoon
                    size="24"
                    className="first:ml-auto first:mr-4 text-gray-500 mr-3 ml-4 transition duration-300 ease-in-out  hover:text-pink-400 cursor-pointer"
                />
            )}
        </span>
    );
};

export default ThemeIcon;
