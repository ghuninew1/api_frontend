import { useState } from "react";

export default function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue);

    function push(element) {
        setArray((a) => [...a, element]);
    }

    function filter(callback) {
        setArray((a) => a.filter(callback));
    }

    function update(index, newElement) {
        setArray((a) => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length),
        ]);
    }

    function remove(index) {
        setArray((a) => [
            ...a.slice(0, index),
            ...a.slice(index + 1, a.length),
        ]);
    }

    function clear() {
        setArray([]);
    }

    return { array, set: setArray, push, filter, update, remove, clear };
}

// Compare this snippet from src/hook/useAuth.js:
// import { useState, useEffect } from "react";
// import { useLocalStorage } from "./useLocalStorage";
// import { useAxiosPublic } from "./useAxiosPublic";
// import { useAxiosPrivate } from "./useAxiosPrivate";
//
// export function useAuth() {
//     const [user, setUser] = useState(null);
//     const [token, setToken] = useLocalStorage("token", null);
//     const [loading, setLoading] = useState(true);
//     const [errors, setErrors] = useState(null);
//     const { makePost } = useAxiosPublic();
//     const { makeGet } = useAxiosPrivate();
//
//     const login = async (email, password) => {
//         try {
//             setLoading(true);
//             setErrors(null);
//             const res = await makePost("/auth/login", { email, password });
//             setUser(res.user);
//             setToken(res.token);
//         } catch (error) {
//             setErrors(error);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     const logout = () => {
//         setUser(null);
//         setToken(null);
//     };
//
//     const getUser = async () => {
//         try {
//             setLoading(true);
//             setErrors(null);
//             const res = await makeGet("/auth/user");
//             setUser(res);
//         } catch (error) {
//             setErrors(error);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     useEffect(() => {
//         if (token) {
//             getUser();
//         } else {
//             setLoading(false);
//         }
//     }, [token]);
//
//     return { user, token, login, logout, loading, errors };
// }
//
// export default useAuth;
//
