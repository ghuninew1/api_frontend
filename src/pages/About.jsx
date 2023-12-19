import { useObserver } from "#hook/useObserver";
import { cx } from "#utils/utils";
// import React, { useRef } from "react";

export default function About() {
    const [ref, entry] = useObserver({ threshold: 0, rootMargin: "0px" });

    const length = 10;
    const refs = Object.keys(Array.from({ length }));
    return (
        <div className=" bg-green-900">
            <div className=" mb-[110vh]"></div>
            <div className="flex pt-10" ref={ref}>
                {entry && (
                    <div className="bg-orange-600 animate-zoomIn h-80 w-1/2 mx-auto">
                        <h1>Header</h1>
                    </div>
                )}
            </div>
        </div>
    );
}
