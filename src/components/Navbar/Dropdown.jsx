// import React from "react";
import { Link } from "react-router-dom";

const dropdown = ({ name, to, onClick, className, ...rest }) => {
    return (
        <Link
            {...rest}
            to={to}
            onClick={onClick}
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${className}`}
        >
            {name}
        </Link>
    );
};

export default dropdown;
