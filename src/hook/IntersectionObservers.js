import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function IntersectionObservers({
    headerRef = [],
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
        headerRef.map((ref, index) => {
            const handleIntersection = (index) => (entries) => {
                const entry = entries[0];
                setEntry((prev) => ({
                    ...prev,
                    [index]: !entry.isIntersecting,
                }));
            };

            const observer = new IntersectionObserver(
                handleIntersection(index),
                observerOptions
            );
            observer.observe(ref.current);
            return observer;
        });

        return () => {
            headerRef.forEach((observer) => observer.disconnect());
        };
    }, [headerRef, root, rootMargin, threshold]);

    return isEntry;
}

IntersectionObservers.propTypes = {
    headerRef: PropTypes.object.isRequired,
    root: PropTypes.object,
    rootMargin: PropTypes.string,
    threshold: PropTypes.number,
};

IntersectionObservers.defaultProps = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};
