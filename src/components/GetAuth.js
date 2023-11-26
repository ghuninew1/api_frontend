import useFetch from "../hook/useFetch";
import PropTypes from "prop-types";

export function GetLogin({ username, password }) {
    const url = import.meta.env.VITE_HOST_API + "/auth/login";
    const { response, error, loading } = useFetch(url, {
        method: "post",
        data: {
            username: username,
            password: password,
        },
    });
    return { response, error, loading };
}

export function GetUser(token) {
    const url = import.meta.env.VITE_HOST_API + "/auth/user";
    const { response, error, loading } = useFetch(url, {
        method: "post",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return { response, error, loading };
}

export function GetRegister({ username, password, email }) {
    const url = import.meta.env.VITE_HOST_API + "/auth/register";
    const { response, error, loading } = useFetch(url, {
        method: "post",
        data: {
            username: username,
            password: password,
            email: email,
        },
    });
    return { response, error, loading };
}

GetLogin.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};

GetRegister.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};
