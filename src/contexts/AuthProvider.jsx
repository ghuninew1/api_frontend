import { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "#hook/useLocalStorage";
import { useCallback } from "react";
import useLogin from "#hook/useLogin";

const initUser = {
    email: null,
    username: null,
    roles: null,
    img: null,
    token: null,
    expires: null,
    isLine: false,
    isFB: false,
    isGg: false,
    timestamp: null,
};

const AuthContext = createContext({
    user: initUser,
    setUser: () => Promise.resolve(),
    userAuth: () => Promise.resolve(),
});

AuthContext.displayName = "AuthContext";
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("auth", {});
    const [loginLine] = useLogin("/auth/loginline");
    const [loginFB] = useLogin("/auth/loginfb");
    const [loginGg] = useLogin("/auth/logingg");

    const userAuth = useCallback(async () => {
        const userLine = JSON.parse(localStorage.getItem("userLine"));
        const userFB = JSON.parse(localStorage.getItem("userFB"));
        const userGg = JSON.parse(localStorage.getItem("userGg"));

        console.log(userLine, userFB, userGg);

        if (userLine && !user.username) {
            await loginLine({
                lineId: userLine?.userId,
                name: userLine?.displayName,
                picture: userLine?.pictureUrl,
            }).then((res) => {
                if (res) {
                    setUser({
                        ...user,
                        ...res,
                        isLine: true,
                        timestamp: new Date().getTime(),
                    });
                }
            });
        } else if (userFB && !user.username) {
            await loginFB({
                fbId: userFB?.id,
                name: userFB?.name,
                picture: userFB?.picture?.data?.url,
            }).then((res) => {
                if (res) {
                    setUser({
                        ...user,
                        ...res,
                        isFB: true,
                        timestamp: new Date().getTime(),
                    });
                }
            });
        } else if (userGg && !user.username) {
            await loginGg({
                ggId: userGg?.googleId,
                name: userGg?.name,
                picture: userGg?.imageUrl,
            }).then((res) => {
                if (res) {
                    setUser({
                        ...user,
                        ...res,
                        isGg: true,
                        timestamp: new Date().getTime(),
                    });
                }
            });
        }
    }, [loginLine, loginFB, loginGg, setUser, user]);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                userAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
