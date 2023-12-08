// import React from "react";
// import { useIntersectionObserver } from "../hook/useHook.js";
// import { GetData } from "../components/Auth";
import { Button } from "../components/button";
import LoginForm from "../components/LoginForm";

export default function Home() {
    // const { data, error, loading } = LogedIn({
    //     username: "gnew",
    //     password: "new@4248085",
    // });
    // console.log(data, error, loading);

    // const { data, error, loading, reFetch } = GetData();
    // console.log(data, error, loading);

    const tableData = [
        {
            id: "1",
            Name: "gnew",
            IP: "192.168.1.100",
            LastWriteTime: "2021-09-14T08:04:54.000Z",
        },
        {
            id: "2",
            Name: "gnew",
            IP: "192.168.1.101",
            LastWriteTime: "2021-09-14T08:04:54.000Z",
        },
        {
            id: "3",
            Name: "gnew",
            IP: "",
            LastWriteTime: "2021-09-14T08:04:54.000Z",
        },
    ];

    return (
        <div className="anim-zoom-in pt-9">
            <div className="flex flex-col items-center justify-center "></div>
        </div>
    );
}
