import { useAuth } from "../../contexts/useAuth";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

const RouteProtected = ({ children }) => {
    const { isUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (
            !isUser.isLogIn &&
            isUser.token === "" &&
            isUser.expirationTime <= new Date().toISOString()
        ) {
            navigate("/login", { replace: true });
        }
    }, [isUser, navigate]);

    return children;
};

RouteProtected.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RouteProtected;
