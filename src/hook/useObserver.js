import { useCallback, useState, useMemo } from "react";
import PropTypes from "prop-types";

export default function useObserver({ threshold, root, rootMargin }) {
    const [entry, setEntry] = useState(false);

    const observer = useMemo(() => {
        if (typeof IntersectionObserver !== "undefined") {
            return new IntersectionObserver(
                ([entry]) => {
                    setEntry(entry?.isIntersecting);
                },
                {
                    threshold,
                    root,
                    rootMargin,
                }
            );
        }
    }, [threshold, root, rootMargin]);

    const ref = useCallback(
        (node) => {
            if (observer) {
                observer.disconnect();
            }

            if (node) {
                observer?.observe(node);
            }
        },
        [observer]
    );

    return [ref, entry];
}

useObserver.propTypes = {
    threshold: PropTypes.number,
    root: PropTypes.object,
    rootMargin: PropTypes.string,
};

useObserver.defaultProps = {
    threshold: 0,
    root: null,
    rootMargin: "0px",
};

// Path: src/pages/UseObserver.js
