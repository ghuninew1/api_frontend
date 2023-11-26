// import React from "react";
// import { useIntersectionObserver } from "../hook/useHook.js";
import useFetch from "../hook/useFetch.js";
import { UseAuthContext } from "../contexts/AuthContextProvider.jsx";

export default function Home() {
    const { users, SetLogin, SetLogout } = UseAuthContext();
    const { datas, loading, error } = useFetch("/deadline10db.json");
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    console.log(users);

    const handleLogin = () => {
        SetLogin({
            token: "123",
            isLogIn: true,
            isAdmin: true,
            isVerified: true,
            expirationTime: Date.now() + 1000 * 60 * 60 * 24,
            timeStamps: Date.now(),
        });
    };

    return (
        <div className=" bg-primary anim-zoom-in">
            {datas?.map((item, idx) => (
                <div key={idx} className="flex gap-5">
                    <span className="flex-grow">{item.Name}</span>
                    <span className="">{item.IP}</span>
                    <span className="flex-grow-0">
                        {item.LastWriteTime.$date}
                    </span>
                </div>
            ))}
            <div className="flex flex-col gap-5">
                <button onClick={handleLogin}>Login</button>
                <button onClick={SetLogout}>Logout</button>
            </div>
        </div>
    );
}
