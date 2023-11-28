import PropTypes from "prop-types";
import axios from "axios";

export const LogedIn = async (username, password) => {
    const { data, error, loading } = await axios.post(
        import.meta.env.VITE_HOST_API + "/auth/login",
        {
            username,
            password,
        }
    );
    if (error) {
        return Promise.reject(error);
    }
    if (loading) {
        return Promise.reject(loading);
    }
    if (data) {
        return Promise.resolve(data);
    }
};

LogedIn.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
};

export const Register = async (username, email, password) => {
    const { data, error, loading } = await axios.post(
        import.meta.env.VITE_HOST_API + "/auth/register",
        {
            username,
            email,
            password,
        }
    );
    if (error) {
        return Promise.reject(error);
    }
    if (loading) {
        return Promise.reject(loading);
    }
    if (data) {
        return Promise.resolve(data);
    }
};

Register.propTypes = {
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
};

export const ResetPassword = async (password, token) => {
    const { data, error, loading } = await axios.post(
        import.meta.env.VITE_HOST_API + "/auth/reset-password",
        {
            data: {
                password,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    if (error) {
        return Promise.reject(error);
    }
    if (loading) {
        return Promise.reject(loading);
    }
    if (data) {
        return Promise.resolve(data);
    }
};

export const Logout = async (token) => {
    const { data, error, loading } = await axios.post(
        import.meta.env.VITE_HOST_API + "/auth/logout",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    if (error) {
        return Promise.reject(error);
    }
    if (loading) {
        return Promise.reject(loading);
    }
    if (data) {
        return Promise.resolve(data);
    }
};

export const CurrentUser = async (token) => {
    const { data, error, loading } = await axios.get(
        import.meta.env.VITE_HOST_API + "/auth/user",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    if (error) {
        return Promise.reject(error);
    }
    if (loading) {
        return Promise.reject(loading);
    }
    if (data) {
        return Promise.resolve(data);
    }
};
CurrentUser.propTypes = {
    token: PropTypes.string,
};

export default {
    LogedIn,
    Register,
    ResetPassword,
    Logout,
    CurrentUser,
};
