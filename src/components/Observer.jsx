import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const Observer = ({ children, ...props }) => {
    const [entry, setEntry] = useState({});
    const observer = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            ([entry]) => {
                setEntry(entry);
            },
            {
                root: props.root,
                rootMargin: props.rootMargin,
                threshold: props.threshold,
            }
        );
        observer.current.observe(observerRef.current);
        return () => {
            observer.current.disconnect();
        };
    }, [props]);

    return children({ ref: observerRef, entry });
};

Observer.propTypes = {
    children: PropTypes.func.isRequired,
    root: PropTypes.object,
    rootMargin: PropTypes.string,
    threshold: PropTypes.number,
    triggerOnce: PropTypes.bool,
};

Observer.defaultProps = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
    triggerOnce: false,
};

export default Observer;
