import { Observer, ToTop } from "../components";

const Contact = () => {
    const length = 30;
    const refs = Object.keys(Array.from({ length }));

    return refs.map((_, index) => (
        <div
            key={index + 1 + "div"}
            className="my-[50px] min-h-screen scroll-smooth"
        >
            <ToTop />
            <Observer key={index + "-div"}>
                <div className="h-[200px] my-[20px] bg-red-600 m-7 anim-fade-in-left">
                    <h1>Header</h1>
                </div>
            </Observer>
        </div>
    ));
};

export default Contact;
