import {
    createContext,
    useContext,
    useState,
    useCallback,
    useMemo,
    useEffect,
} from "react";
import PropTypes from "prop-types";

const initialUserState = {
    username: "",
    email: "",
    token: "",
    isLogIn: false,
    isAdmin: false,
    isVerified: false,
    expirationTime: "",
    timeStamps: "",
};

export const AuthContext = createContext(initialUserState);

export const UseAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(initialUserState);

    const users = useMemo(() => {
        return user;
    }, [user]);

    const SetLogin = useCallback((data) => {
        setUser({
            ...data,
        });
    }, []);

    const SetLogout = useCallback(() => {
        setUser(initialUserState);
        localStorage.removeItem("user");
    }, []);

    useEffect(() => {
        const userLocal = localStorage.getItem("user");
        if (userLocal) {
            setUser(JSON.parse(userLocal));
        }
    }, []);

    useEffect(() => {
        if (users.isLogIn && users.expirationTime > Date.now()) {
            localStorage.setItem("user", JSON.stringify(users));
        }
    }, [users]);

    return (
        <AuthContext.Provider
            value={{
                users,
                SetLogin,
                SetLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
