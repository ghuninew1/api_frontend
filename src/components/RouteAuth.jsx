import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "#contexts/useAuthContext";

export default function RouteAuth({ children }) {
    const location = useLocation();
    const { isUser } = useAuth();

    return (
        <>
            {isUser.username ? (
                children
            ) : (
                <Navigate
                    to={{
                        pathname: "/login",
                        state: { from: location },
                    }}
                />
            )}
        </>
    );
}

RouteAuth.propTypes = {
    children: PropTypes.node,
};
