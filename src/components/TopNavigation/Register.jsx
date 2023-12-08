import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => (
    <div className="flex items-center justify-center">
        <Link to="/register">
            <FaUserPlus
                size="24"
                className="first:ml-auto first:mr-4 text-gray-500 mr-3 ml-4 transition duration-300 ease-in-out  hover:text-green-400 cursor-pointer"
            />
        </Link>
    </div>
);

export default Register;
