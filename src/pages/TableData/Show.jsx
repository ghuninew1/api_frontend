// import { cx } from "../../utils/utils";
// import { Button } from "../../components/Button";
import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";

const Show = ({ show = [], setShow }) => {
    if (!show) return null;
    return (
        <div
            className="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-50 flex justify-center items-center cursor-context-menu"
            onClick={() => setShow(false)}
        >
            <div className=" p-5 rounded-md">
                <div className="flex justify-end">
                    <span
                        className="rounded-md cursor-pointer hover:outline-none hover:bg-green-600/10 p-1"
                        onClick={() => setShow(false)}
                    >
                        <AiFillCloseCircle size={40} color="red" />
                    </span>
                </div>
                <div className="flex justify-center items-center">
                    <img src={show.img} alt="" className="w-1/2" />
                </div>
            </div>
        </div>
    );
};
Show.propTypes = {
    show: PropTypes.array,
    setShow: PropTypes.func,
};

export default Show;
