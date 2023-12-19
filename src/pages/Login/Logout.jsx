import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "#contexts/useAuthContext";
import Loading from "#components/Loading";
import { useLineLiff } from "#hook/useLineLiff";
import { useFB } from "#hook/useFB";
import { useGoogle } from "#hook/useGoogle";

function Logout() {
    const { isUser, logout } = useAuth();
    const navigate = useNavigate();
    const { lineLogout } = useLineLiff();
    const { logoutFB } = useFB();
    const { logoutGg } = useGoogle();

    const handleLogout = useCallback(() => {
        if (isUser.isLine && isUser.username) {
            lineLogout();
            logout();
            navigate("/login");
        } else if (isUser.isFB && isUser.username) {
            logoutFB();
            logout();
            navigate("/login");
        } else if (isUser.username && isUser.isGg) {
            logoutGg();
            logout();
            navigate("/login");
        } else if (isUser.username) {
            logout();
            navigate("/login");
        } else {
            navigate("/login");
        }
    }, [isUser, lineLogout, logout, navigate, logoutFB, logoutGg]);

    useEffect(() => {
        handleLogout();
    }, [handleLogout]);

    return (
        <>
            <Loading />
        </>
    );
}

export default Logout;
