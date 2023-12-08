import api from "../../services/api";

export async function makeLogin(username, password) {
    try {
        const res = await api.post("/auth/login", {
            username,
            password,
        });
        return res.status === 200 || res.status === 201
            ? await Promise.resolve(res.data)
            : await Promise.reject(res.data);
    } catch (error) {
        return await Promise.reject(
            error?.response?.data?.message ?? error?.message
        );
    }
}

export async function makeRegister(username, password, email) {
    try {
        const response = await api.post("/auth/register", {
            username,
            password,
            email,
        });
        if (response.status === 200) {
            return await Promise.resolve(response.data);
        } else {
            return await Promise.reject(response.data);
        }
    } catch (error) {
        return await Promise.reject(
            error?.response?.data?.message ?? error?.message
        );
    }
}
