// import React from "react";
// import { useIntersectionObserver } from "../hook/useHook.js";
// import { GetData } from "../components/Auth";
import Table from "./Users/Table";

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
            LastWriteTime: {
                $date: "2021-09-14T08:04:54.000Z",
            },
        },
        {
            id: "2",
            Name: "gnew",
            IP: "192.168.1.101",
            LastWriteTime: {
                $date: "2021-09-14T08:04:54.000Z",
            },
        },
        {
            id: "3",
            Name: "gnew",
            IP: "",
            LastWriteTime: {
                $date: "2021-09-14T08:04:54.000Z",
            },
        },
    ];

    return (
        <div className="anim-zoom-in pt-9">
            <Table data={tableData} dataHeader={Object.keys(tableData[0])} />
            {/* {datas?.map((item, idx) => (
                <div key={idx} className="flex gap-5 bg-green-900 p-5">
                    <span className="flex-grow">{item.Name}</span>
                    <span className="">{item.IP}</span>
                    <span className="flex-grow-0">
                        {item.LastWriteTime.$date}
                    </span>
                </div>
            ))} */}
            {/* <button onClick={reFetch}>Get Data</button> */}
        </div>
    );
}
