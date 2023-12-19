import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "#contexts/useAuthContext";
import { useLiffLogout } from "#hook/useLineLiff";

export default function Logout({ children }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const { lineLogout } = useLiffLogout();

    const handleLogout = async () => {
        if (user.isLine && user.username) {
            lineLogout();
            logout();
            navigate("/login");
        } else {
            logout();
            navigate("/login");
        }
    };

    return <span onClick={handleLogout}>{children}</span>;
}

Logout.propTypes = {
    children: PropTypes.node.isRequired,
};
