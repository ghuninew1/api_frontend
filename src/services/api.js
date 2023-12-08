import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_HOST_API,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true,
});

// Add global request interceptor
api.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user?.token) {
            config.headers.Authorization = `Bearer ${user?.token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add global response interceptor
api.interceptors.response.use(
    (response) => {
        // Modify response data here, if needed
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;

export async function makePost(data) {
    try {
        const res = await api.post("/com", {
            ...data,
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

export async function makeGet() {
    try {
        const res = await api.get("/com");

        return res.status === 200 || res.status === 201
            ? await Promise.resolve(res.data)
            : await Promise.reject(res.data);
    } catch (error) {
        return await Promise.reject(
            error?.response?.data?.message ?? error?.message
        );
    }
}

export async function makeDelete(id) {
    try {
        const res = await api.delete(`/com/${id}`);

        return res.status === 200 || res.status === 201
            ? await Promise.resolve(res.data)
            : await Promise.reject(res.data);
    } catch (error) {
        return await Promise.reject(
            error?.response?.data?.message ?? error?.message
        );
    }
}

export async function makePut(id, data) {
    try {
        const res = await api.put(`/com/${id}`, {
            ...data,
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
