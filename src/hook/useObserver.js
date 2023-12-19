import { useState, useMemo, useRef, useCallback } from "react";

export function useObserver({
    threshold = 0,
    root = null,
    rootMargin = "0px",
}) {
    const [entry, setEntry] = useState(false);
    const nodeRef = useRef(null);

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

    const setNodeRef = useCallback(
        (node) => {
            if (nodeRef.current) {
                observer.unobserve(nodeRef.current);
            }

            if (node) {
                observer.observe(node);
            }

            nodeRef.current = node;
        },
        [observer]
    );

    return [setNodeRef, entry];
}

export default useObserver;
