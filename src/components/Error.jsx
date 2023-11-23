import { useRouteError } from "react-router-dom";
// import PropTypes from "prop-types";

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
