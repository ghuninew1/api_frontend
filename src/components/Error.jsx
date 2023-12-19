import { useRouteError, useNavigate } from "react-router-dom";

export default function Error() {
    const errors = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 bg-bgDark w-full">
            <div className="container mx-auto flex flex-col justify-center items-center">
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
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}
