import PropTypes from "prop-types";
// import { wait } from "../utils/utils";

export default function ShowError({ error, setError }) {
    if (error == null || error === "") return;

    return (
        <section
            className="absolute top-0 left-0 w-full flex justify-center items-center"
            onClick={() => {
                setError(null);
            }}
        >
            <h2 className="text-center text-red-700 text-sm">{error}</h2>
        </section>
    );
}
ShowError.propTypes = {
    error: PropTypes.string,
    setError: PropTypes.func,
};
