import PropTypes from "prop-types";
import InputText from "./InputText";
import { makePut } from "../../services/api";
import { Button } from "../../components/button";

export default function EditValue({ item, refetch, setEdit }) {
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
            status: true,
        };

        await makePut(item._id, data);

        refetch();
        setEdit();
    }
    return (
        <div className="fixed top-0 left-0 right-0 flex flex-col items-center justify-center z-20 min-h-[60vh] anim-zoom-in">
            <form
                className="relative flex flex-col p-4 rounded-md shadow-md justify-center items-center gap-2 bg-gray-500 dark:bg-gray-800 max-w-6xl"
                onSubmit={handleSubmit}
            >
                <h1 className="mb-2 text-2xl font-bold text-white">
                    Edit User
                </h1>

                <div className="flex flex-wrap w-full gap-3 justify-center items-center">
                    {Object.keys(item ?? {})
                        .filter((key) => key !== "_id" && key !== "status")
                        .map((key, idx) => (
                            <input
                                key={idx}
                                type={key === "img" ? "url" : "text"}
                                name={key}
                                defaultValue={item[key]}
                                className=" p-2 text-sm text-gray-900 bg-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                placeholder={key}
                            />
                        ))}
                </div>
                <div className="flex mt-5 gap-3">
                    <Button
                        className="bg-green-500 hover:bg-green-800"
                        type="submit"
                    >
                        Submit
                    </Button>
                    <Button
                        className=" bg-red-500 hover:bg-red-700"
                        type="button"
                        onClick={() => setEdit()}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
}

EditValue.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func,
    setEdit: PropTypes.func,
};
