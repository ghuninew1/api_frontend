import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => (
    <div className="flex items-center justify-center">
        <Link to="/login">
            <FaSignInAlt
                size="24"
                className="first:ml-auto first:mr-4  mr-3 ml-4 transition duration-300 ease-in-out  hover:text-green-400 cursor-pointer"
            />
        </Link>
    </div>
);

export default Login;
