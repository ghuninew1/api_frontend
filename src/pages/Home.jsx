// import React from "react";
// import { useIntersectionObserver } from "../hook/useHook.js";
// import { GetData } from "../components/Auth";

export default function Home() {
    // const { data, error, loading } = LogedIn({
    //     username: "gnew",
    //     password: "new@4248085",
    // });
    // console.log(data, error, loading);

    // const { data, error, loading, reFetch } = GetData();
    // console.log(data, error, loading);

    return (
        <div className=" anim-zoom-in pt-9">
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
