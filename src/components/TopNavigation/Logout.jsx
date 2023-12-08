import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../contexts/useAuth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { SetLogout } = useAuth();
    const navigate = useNavigate();

    return (
        <div
            className="hidden md:flex items-center justify-center"
            onClick={() => {
                SetLogout();
                navigate("/login");
            }}
        >
            <FaSignOutAlt
                size="24"
                className="first:ml-auto first:mr-4 text-gray-500 mr-3 ml-4 transition duration-300 ease-in-out  hover:text-green-400 cursor-pointer"
            />
        </div>
    );
};

export default Logout;
