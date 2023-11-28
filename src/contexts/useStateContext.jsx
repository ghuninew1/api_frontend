import { useContext } from "react";
import { StateContext } from "./StateProvider";

export const useStateContext = () => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error("useState must be used within an StateProvider");
    }
    return context;
};
