import { useRouteError } from "react-router-dom";
import PropTypes from "prop-types";
import { wait } from "../utils/utils";

export default function Error() {
    const errors = useRouteError();

    return (
        <div className="fixed inset-0 bg-secondary min-h-screen w-screen">
            <div className="container mx-auto min-h-screen flex justify-center items-center">
                <div className="text-center font-mono">
                    <h1 className="text-9xl font-bold text-red-700 mb-10">
                        {errors.status || errors.code}
                    </h1>
                    <h2 className="text-4xl font-bold text-orange-300 my-5">
                        {errors.statusText ||
                            errors.message ||
                            "Oops! Page Not Found."}
                    </h2>
                    <p className="text-2xl font-medium text-yellow-400 mt-10"></p>
                </div>
            </div>
        </div>
    );
}

export function ShowError({ error, setError }) {
    if (error == null || error === "") return;

    wait(4000).then(() => {
        setError(null);
    });

    return (
        <div
            className="flex justify-center items-center bg-red-500 fixed top-0 left-0 w-full h-full"
            onClick={() => {
                setError(null);
            }}
        >
            <h2 className="text-center text-secondary font-mono text-xl font-medium">
                {error}
            </h2>
        </div>
    );
}

ShowError.propTypes = {
    error: PropTypes.string,
    setError: PropTypes.func,
};
