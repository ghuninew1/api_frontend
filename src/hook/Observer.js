import { forwardRef } from "react";
import PropTypes from "prop-types";
import { useObserver } from "./useObserver";

export const Observer = forwardRef(({ children, ...props }, ref) => {
    const [observerRef, entry] = useObserver(props);

    return children({
        ref: ref || observerRef,
        entry,
    });
});

Observer.displayName = "Observer";

Observer.propTypes = {
    children: PropTypes.func.isRequired,
};

export default Observer;
