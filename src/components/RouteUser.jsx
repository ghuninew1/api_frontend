import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "#contexts/useAuthContext";

export default function RouteUser({ children }) {
    const location = useLocation();
    const { isUser } = useAuth();

    return (
        <>
            {isUser.username && location.pathname === "/login" ? (
                <Navigate
                    to={{
                        pathname: "/",
                        state: { from: location },
                    }}
                />
            ) : (
                children
            )}
        </>
    );
}

RouteUser.propTypes = {
    children: PropTypes.node,
};
