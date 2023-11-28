import { useAuthContext } from "../contexts/useAuthContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

const RouteRoot = ({ children }) => {
    const { isUser } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (isUser?.isLogIn === false) {
            navigate("/login");
        }
    }, [isUser, navigate]);

    return <>{children}</>;
};

RouteRoot.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RouteRoot;
