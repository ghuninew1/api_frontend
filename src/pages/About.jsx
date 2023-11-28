import { useObserver } from "../hook/useObserver";
// import React, { useRef } from "react";

export default function About() {
    const [ref, entry] = useObserver({ threshold: 0.1, rootMargin: "0px" });
    return (
        <div className="mb-[500px] min-h-[2000px] bg-green-900">
            <div ref={ref} className="h-[1000px] mt-[1500px]">
                {entry && (
                    <div className="bg-orange-600 anim-zoom-in-down h-80">
                        <h1>Header</h1>
                    </div>
                )}
            </div>
        </div>
    );
}
