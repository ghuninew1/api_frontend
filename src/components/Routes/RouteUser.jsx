import { useAuth } from "../../contexts/useAuth";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

export function RouteUser({ children }) {
    const { isUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isUser?.isLogIn !== true && !isUser?.token) {
            navigate("/login", { replace: true });
        }
    }, [navigate, isUser]);

    return (
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
        </div>
    );
}

RouteUser.propTypes = {
    children: PropTypes.node,
};

export default RouteUser;
