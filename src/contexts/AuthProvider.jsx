import {
    createContext,
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
initialUserState.propTypes = {
    username: PropTypes.string,
    email: PropTypes.string,
    token: PropTypes.string,
    isLogIn: PropTypes.bool,
    isAdmin: PropTypes.bool,
    isVerified: PropTypes.bool,
    expirationTime: PropTypes.string,
    timeStamps: PropTypes.string,
};

export const AuthContext = createContext({
    isUser: initialUserState,
    changeUser: () => {},
    SetLogout: () => {},
});

AuthContext.propTypes = {
    isUser: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        token: PropTypes.string,
        isLogIn: PropTypes.bool,
        isAdmin: PropTypes.bool,
        isVerified: PropTypes.bool,
        expirationTime: PropTypes.string,
        timeStamps: PropTypes.string,
    }),
    changeUser: PropTypes.func,
    SetLogout: PropTypes.func,
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(initialUserState);

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
        if (user.isLogIn && user.expirationTime > new Date().toISOString()) {
            localStorage.setItem("user", JSON.stringify(user));
        }
    }, [user]);

    const changeUser = useCallback(
        (data) => {
            setUser({
                ...user,
                ...data,
            });
        },
        [user]
    );

    const isUser = useMemo(() => user, [user]);

    return (
        <AuthContext.Provider
            value={{
                isUser,
                changeUser,
                SetLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
    isUser: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        token: PropTypes.string,
        isLogIn: PropTypes.bool,
        isAdmin: PropTypes.bool,
        isVerified: PropTypes.bool,
        expirationTime: PropTypes.string,
        timeStamps: PropTypes.string,
    }),
    changeUser: PropTypes.func,
    SetLogout: PropTypes.func,
};
