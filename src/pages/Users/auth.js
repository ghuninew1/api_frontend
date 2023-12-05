import { api } from "../../services/makeRequest";

export async function MakeLogin(username, password) {
    try {
        const res = await api.post("/auth/login", {
            username,
            password,
        });
        if (res.status === 200 && res.data) {
            return Promise.resolve(res.data);
        } else {
            return await Promise.reject(res.data);
        }
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
            return Promise.resolve(response.data);
        } else {
            return await Promise.reject(response.data);
        }
    } catch (error) {
        return await Promise.reject(
            error?.response?.data?.message ?? error?.message
        );
    }
}
