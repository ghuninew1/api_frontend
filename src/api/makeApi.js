import api from "./index";

export async function makeApi({ url, method = "GET", data = null, ...args }) {
    if (!url) {
        return await Promise.reject("URL is required");
    }
    try {
        const res = await api({
            url,
            method,
            data,
            ...args,
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

export async function makePostApi(url, data, ...args) {
    try {
        const res = await api.post(url, data, ...args);

        return res.status === 200 || res.status === 201
            ? await Promise.resolve(res.data)
            : await Promise.reject(res.data);
    } catch (error) {
        return await Promise.reject(
            error?.response?.data?.message ?? error?.message
        );
    }
}

export async function makeGetApi(url, ...args) {
    try {
        const res = await api.get(url, ...args);

        return res.status === 200 || res.status === 201
            ? await Promise.resolve(res.data)
            : await Promise.reject(res.data);
    } catch (error) {
        return await Promise.reject(
            error?.response?.data?.message ?? error?.message
        );
    }
}

export async function makePutApi(url, data, ...args) {
    try {
        const res = await api.put(url, data, ...args);

        return res.status === 200 || res.status === 201
            ? await Promise.resolve(res.data)
            : await Promise.reject(res.data);
    } catch (error) {
        return await Promise.reject(
            error?.response?.data?.message ?? error?.message
        );
    }
}

export async function makeDeleteApi(url, ...args) {
    try {
        const res = await api.delete(url, ...args);

        return res.status === 200 || res.status === 201
            ? await Promise.resolve(res.data)
            : await Promise.reject(res.data);
    } catch (error) {
        return await Promise.reject(
            error?.response?.data?.message ?? error?.message
        );
    }
}

// export async function makeLogin(username, password) {
//     try {
//         const res = await apiPrivate.post("/auth/login", {
//             username,
//             password,
//         });

//         return res.status === 200 || res.status === 201
//             ? await Promise.resolve(res.data)
//             : await Promise.reject(res.data);
//     } catch (error) {
//         return await Promise.reject(
//             error?.response?.data?.message ?? error?.message
//         );
//     }
// }

// export async function makeLoginLine(data) {
//     try {
//         console.log("username", data);
//         const res = await apiPrivate({
//             method: "POST",
//             url: "/auth/loginline",
//             data,
//         });

//         return res.status === 200 || res.status === 201
//             ? await Promise.resolve(res.data)
//             : await Promise.reject(res.data);
//     } catch (error) {
//         return await Promise.reject(
//             error?.response?.data?.message ?? error?.message
//         );
//     }
// }

// export async function makeRegister(username, password, email) {
//     try {
//         const res = await api.post("/auth/register", {
//             username,
//             password,
//             email,
//         });

//         return res.status === 200 || res.status === 201
//             ? await Promise.resolve(res.data)
//             : await Promise.reject(res.data);
//     } catch (error) {
//         return await Promise.reject(
//             error?.response?.data?.message ?? error?.message
//         );
//     }
// }

// export async function makeLogout() {
//     try {
//         const res = await apiPrivate.get("/auth/logout");

//         return res.status === 200 || res.status === 201
//             ? await Promise.resolve(res.data)
//             : await Promise.reject(res.data);
//     } catch (error) {
//         return await Promise.reject(
//             error?.response?.data?.message ?? error?.message
//         );
//     }
// }

// export async function makeGetUser() {
//     try {
//         const res = await apiPrivate.get("/auth/user");

//         return res.status === 200 || res.status === 201
//             ? await Promise.resolve(res.data)
//             : await Promise.reject(res.data);
//     } catch (error) {
//         return await Promise.reject(
//             error?.response?.data?.message ?? error?.message
//         );
//     }
// }
