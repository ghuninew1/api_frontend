import { useRef } from "react";
import { toTop } from "../utils/utils";
// import { useWindowSize } from "../hook/useHook";

const ToTop = () => {
    const ref = useRef();

    return (
        <button
            ref={ref}
            onClick={() => toTop()}
            className="fixed right-0 bottom-0 m-5 p-3 bg-green-900 rounded-md hover:bg-green-700 hover:drop-shadow-xl"
        >
            {" "}
            {`to top`}{" "}
        </button>
    );
};

export default ToTop;
