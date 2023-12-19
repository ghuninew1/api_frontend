import PropTypes from "prop-types";

const Icon = ({ icon, img, text, onClick, ...props }) => {
    return (
        <select
            {...props}
            className="flex flex-row items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-100 ease-in-out transform hover:scale-110 bg-gray-100 dark:bg-gray-800 rounded-md p-2 m-2 min-w-max"
            onClick={onClick}
        >
            {icon ? { icon } : <img src={img || ""} alt="icon" />}
            <p className=" hidden md:block text-sm  ">{text}</p>
        </select>
    );
};

Icon.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
    img: PropTypes.string,
    onClick: PropTypes.func,
};
Icon.defaultProps = {
    icon: null,
    text: "",
    img: "",
    onClick: () => {},
};
export default Icon;
