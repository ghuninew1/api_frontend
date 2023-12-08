import { forwardRef } from "react";
import PropTypes from "prop-types";
import { useObserver } from "../hook/useObserver";

export const ObserverRef = forwardRef(({ children, ...props }, ref) => {
    const [observerRef, entry] = useObserver(props);

    return children({
        ref: ref || observerRef,
        entry,
    });
});

ObserverRef.displayName = "ObserverRef";

ObserverRef.propTypes = {
    children: PropTypes.func.isRequired,
};

export function Observer({ children, threshold, rootMargin, ...props }) {
    return (
        <ObserverRef threshold={threshold} rootMargin={rootMargin}>
            {({ ref, entry }) => (
                <div ref={ref} {...props}>
                    {entry && children}
                </div>
            )}
        </ObserverRef>
    );
}

Observer.propTypes = {
    children: PropTypes.node.isRequired,
    threshold: PropTypes.number,
    rootMargin: PropTypes.string,
};

Observer.defaultProps = {
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
};

export default Observer;

//Usage:
// import { UseObserver } from "../hook/Observer";
// import ToTop from "../components/ToTop";
//
// const Contact = () => {
//     const length = 30;
//     const refs = Object.keys(Array.from({ length }));
//
//     return refs.map((_, index) => (
//         <div
//             key={index + 1 + "div"}
//             className="my-[50px] min-h-screen scroll-smooth"
//         >
//             <ToTop />
//             <UseObserver key={index + "-div"}>
//                 <div className="m-7">
//                     <div className="h-[200px] my-[20px] bg-red-600 m-7 anim-fade-in-left">
//                         <h1>Header</h1>
//                     </div>
//                 </div>
//             </UseObserver>
//         </div>
//     ));
// };
