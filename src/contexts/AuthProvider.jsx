import { createContext, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "../hook/useLocalStorage";

const initialUserState = {
    username: "",
    email: "",
    token: "",
    isLogIn: false,
    isAdmin: false,
    isVerified: false,
    expirationTime: "",
    updatedAt: "",
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
    updatedAt: PropTypes.string,
    timeStamps: PropTypes.string,
};

export const AuthContext = createContext({
    isUser: initialUserState,
    SetLogin: () => {},
    SetLogout: () => {},
});

AuthContext.propTypes = {
    isUser: PropTypes.object,
    SetLogin: PropTypes.func,
    SetLogout: PropTypes.func,
};

export function AuthProvider({ children }) {
    const [user, setUser] = useLocalStorage("user", initialUserState);

    const SetLogin = useCallback(
        (data) => {
            setUser((prev) => ({
                ...prev,
                ...data,
                isLogIn: true,
                timeStamps: new Date().toISOString(),
            }));
        },
        [setUser]
    );

    const SetLogout = useCallback(() => {
        setUser((prev) => ({
            ...prev,
            ...initialUserState,
        }));
    }, [setUser]);

    const isUser = useMemo(() => {
        return user;
    }, [user]);

    return (
        <AuthContext.Provider
            value={{
                isUser,
                SetLogin,
                SetLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
