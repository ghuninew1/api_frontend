import { useContext, useCallback, useMemo } from "react";
import AuthContext from "./AuthProvider";

const useAuthContext = () => useContext(AuthContext);
export const useAuth = () => {
    const { user, setUser, userAuth } = useAuthContext();
    const login = useCallback((newUser) => setUser(newUser), [setUser]);
    const logout = useCallback(() => setUser(null), [setUser]);
    const Auth = useMemo(() => userAuth, [userAuth]);
    const isUser = useMemo(() => user, [user]);

    return {
        isUser,
        login,
        logout,
        Auth,
    };
};
export default useAuthContext;
