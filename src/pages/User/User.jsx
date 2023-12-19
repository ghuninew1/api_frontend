import Button from "#components/Button";
import { useData } from "#hook/useData";
import { cx } from "#utils/utils.js";
import { useState, useEffect } from "react";

export default function User() {
    const [path, setPath] = useState("user");
    const [getDatas, setGetDatas] = useState([]);
    const [data, refetch] = useData({
        url: `/user/${path}`,
        method: "get",
    });

    useEffect(() => {
        if (typeof data === "object" && data != null) {
            setGetDatas(data);
        }
        return () => {
            setGetDatas([]);
        };
    }, [data]);

    return (
        <div className="animate-zoomIn p-5">
            <div className="flex flex-col items-center justify-center max-w-4xl">
                <div className="text-3xl font-bold text-center">
                    <h1>User Profile</h1>
                </div>
                <div className={cx("text-4xl font-bold text-center")}>
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-500 border-blue-500"
                        onClick={() => refetch()}
                    >
                        Refetch
                    </Button>
                </div>
                {getDatas?.img && (
                    <div className="w-1/4 my-5">
                        <img
                            src={getDatas?.img}
                            alt=""
                            className="rounded-3xl shadow-xl"
                        />
                    </div>
                )}
                <div className="w-full p-10">
                    <ul className="text-xl text-red-600 mb-3 max-w-[800px] mx-auto">
                        {getDatas &&
                            Object.values(getDatas).map((item, idx) => (
                                <li key={idx}>
                                    <span className="text-green-500 mr-3 ">
                                        {Object.keys(getDatas)[idx]}: &nbsp;
                                    </span>
                                    <span
                                        className="text-red-500 cursor-pointer"
                                        onClick={() => {
                                            setPath(item);
                                        }}
                                    >
                                        {item} &nbsp;
                                    </span>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
