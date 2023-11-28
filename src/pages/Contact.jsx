import { Observer } from "../hook/Observer";
import { toTop } from "../utils/utils";

const Contact = () => {
    const length = 30;
    const refs = Object.keys(Array.from({ length }));

    return refs.map((_, index) => (
        <div
            key={index + 1 + "div"}
            className="my-[50px] min-h-screen scroll-smooth"
        >
            <button
                onClick={() => toTop()}
                className="fixed right-0 bottom-0 m-5 p-3 bg-green-900 rounded-md hover:bg-green-700 hover:drop-shadow-xl"
            >
                {" "}
                {`to top`}{" "}
            </button>
            <Observer key={index + "-div"}>
                {({ ref, entry }) => (
                    <div ref={ref} className="m-7 ">
                        {entry && (
                            <div className="h-[200px] my-[20px] bg-red-600 m-7 anim-fade-in-left">
                                <h1>Header</h1>
                            </div>
                        )}
                    </div>
                )}
            </Observer>
        </div>
    ));
};

export default Contact;
