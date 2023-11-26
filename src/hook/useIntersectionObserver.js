import { useCallback, useState, useRef } from "react";
import PropTypes from "prop-types";

export function useIntersectionObserver({ threshold, root, rootMargin }) {
    const [entry, setEntry] = useState(false);
    const ref = useRef(null);

    const customRef = useCallback(
        (node) => {
            if (ref.current) {
                ref.current.disconnect();
                ref.current = null;
            }

            if (node?.nodeType === Node.ELEMENT_NODE) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        setEntry(entry?.isIntersecting);
                    },
                    { threshold, root, rootMargin }
                );

                observer.observe(node);
                ref.current = observer;
            }

            if (node) {
                node.addEventListener("load", () => {
                    setEntry(true);
                });
            } else {
                setEntry(false);
            }

            if (typeof ref === "function") {
                ref(node);
            } else if (ref) {
                ref.current = node;
            }
        },
        [ref, threshold, root, rootMargin]
    );

    return [customRef, entry];
}

useIntersectionObserver.propTypes = {
    threshold: PropTypes.number,
    root: PropTypes.object,
    rootMargin: PropTypes.string,
};
