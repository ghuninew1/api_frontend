import PropTypes from "prop-types";
// import { wait } from "../utils/utils";

export default function ShowError({ error, setError }) {
    if (error == null || error === "") return;

    // wait(4000).then(() => {
    //     setError(null);
    // });

    return (
        <div
            className="absolute top-0 left-0 mt-3 w-full flex justify-center items-center"
            onClick={() => {
                setError(null);
            }}
        >
            <h2 className="text-center text-red-700 text-base">{error}</h2>
        </div>
    );
}
ShowError.propTypes = {
    error: PropTypes.string,
    setError: PropTypes.func,
};
