import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useUser() {
    const [user, setUser] = useState(false);
    const navigate = useNavigate();
    const users = localStorage.getItem("user");

    useEffect(() => {
        const usersParse = JSON.parse(users);

        if (usersParse?.isLogIn === true && usersParse?.token) {
            setUser(true);
            navigate("/", { replace: true });
        } else {
            setUser(false);
            navigate("/login", { replace: true });
        }
    }, [navigate, users]);

    return user;
}
