import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function IntersectionObserver({
    headerRef,
    root,
    rootMargin,
    threshold,
}) {
    const [isEntry, setEntry] = useState(true);

    useEffect(() => {
        const observerOptions = {
            root: root,
            rootMargin: rootMargin,
            threshold: threshold,
        };
        const headerNode = headerRef.current;

        const handleIntersection = (entries) => {
            const entry = entries[0];
            setEntry(!entry.isIntersecting);
        };

        const observer = new IntersectionObserver(
            handleIntersection,
            observerOptions
        );

        if (headerNode) {
            observer.observe(headerNode);
        }

        return () => {
            if (headerNode) {
                observer.unobserve(headerNode);
            }
        };
    }, [headerRef, root, rootMargin, threshold]);

    return isEntry;
}

IntersectionObserver.propTypes = {
    headerRef: PropTypes.object.isRequired,
    root: PropTypes.object,
    rootMargin: PropTypes.string,
    threshold: PropTypes.number,
};

IntersectionObserver.defaultProps = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};
