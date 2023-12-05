import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_HOST_API,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true,
});

export default async function makeRequest(url, options) {
    try {
        return await Promise.resolve(
            await api({
                url,
                ...options,
            })
        );
    } catch (error) {
        return await Promise.reject(
            error?.response?.data?.message ?? error?.message
        );
    }
}
