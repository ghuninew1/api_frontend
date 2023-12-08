import { useObserver } from "../hook/useObserver";
import { Observer } from "../components";
import { cx } from "../utils/utils";
// import React, { useRef } from "react";

export default function About() {
    const [ref, entry] = useObserver({ threshold: 0.1, rootMargin: "0px" });

    const length = 30;
    const refs = Object.keys(Array.from({ length }));
    return (
        <div className=" bg-green-900">
            <div ref={ref} className="flex pt-10">
                {entry && (
                    <div className="bg-orange-600 anim-zoom-in-down h-80">
                        <h1>Header</h1>
                    </div>
                )}
            </div>

            {refs.map((_, index) => (
                <Observer key={index + "-div"} className="bg-slate-700 h-400">
                    <div className={cx(entry && "anim-fade-in-left")}>
                        <div className="h-[200px] my-[20px] bg-red-600 m-7 anim-fade-in-left">
                            <h1>Header + {index}</h1>
                        </div>
                    </div>
                </Observer>
            ))}
        </div>
    );
}
