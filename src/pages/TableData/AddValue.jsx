import PropTypes from "prop-types";
import Button from "#components/Button";
import { cx } from "#utils/utils";
import { AiFillSave, AiFillCloseCircle } from "react-icons/ai";
import InputText from "./InputText";

export default function AddValue({ refetch, setAdd }) {
    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            user: e.target.user.value,
            ip: e.target.ip.value,
            cpu: e.target.cpu.value,
            ram: e.target.ram.value,
            hdd: e.target.hdd.value,
            gpu: e.target.gpu.value,
            os: e.target.os.value,
            ups: e.target.ups.value,
            subscribes: e.target.subscribes.value,
            img: e.target.img.value,
        };

        refetch();
        // setAdd(false);
    }

    return (
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center z-20 bg-gray-600 dark:bg-gray-800 rounded-md shadow-md anim-zoom-in">
            <h1 className="mb-2 text-2xl font-bold text-white">Add User</h1>
            <form
                className="flex flex-col w-full p-4 justify-center items-center gap-2 "
                onSubmit={handleSubmit}
            >
                <div className="flex flex-wrap w-full gap-5 justify-center">
                    <InputText labelTitle="name" name="name" />

                    <InputText labelTitle="user" name="user" />
                    <InputText labelTitle="ip" name="ip" />
                    <InputText labelTitle="cpu" name="cpu" />
                    <InputText labelTitle="ram" name="ram" />
                    <InputText labelTitle="hdd" name="hdd" />
                    <InputText labelTitle="gpu" name="gpu" />
                    <InputText labelTitle="os" name="os" />
                    <InputText labelTitle="ups" name="ups" />

                    <InputText labelTitle="subscribes" name="subscribes" />
                    <InputText labelTitle="img" name="img" />
                </div>

                <div className="flex mt-5">
                    <Button className="w-full" type="submit">
                        <AiFillSave size={20} />
                        Submit
                    </Button>
                </div>
                <span
                    className={cx(
                        "absolute top-2 right-2 text-white cursor-pointer hover:text-red-500"
                    )}
                    onClick={() => setAdd(false)}
                >
                    <AiFillCloseCircle className={cx("w-10 h-10")} />
                </span>
            </form>
        </div>
    );
}

AddValue.propTypes = {
    refetch: PropTypes.func,
    setAdd: PropTypes.func,
};
