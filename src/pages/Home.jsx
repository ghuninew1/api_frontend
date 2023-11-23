// import React from "react";
// import { useIntersectionObserver } from "../hook/useHook.js";

export default function Home() {
    const getProtocol = () => window.location.protocol.split(":")[0];
    const getHost = () => window.location.host;
    const getHostName = () => window.location.hostname;
    const getPort = () => window.location.port;

    const getOrigin = () => window.location.origin;

    return (
        <>
            <div className=" bg-primary anim-zoom-in">
                <p className="text-2xl text-center text-white ">
                    {getProtocol()}
                </p>
                <p className="text-2xl text-center text-white">{getHost()}</p>
                <p className="text-2xl text-center text-white">
                    {getHostName()}
                </p>
                <p className="text-2xl text-center text-white">{getPort()}</p>
                <p className="text-2xl text-center text-white">{getOrigin()}</p>
            </div>
        </>
    );
}
