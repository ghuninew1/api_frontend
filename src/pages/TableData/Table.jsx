import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useInput } from "../../hook/useInput";
import { useAxios } from "../../hook/useAxios";
import EditValue from "./EditValue";
import { Button } from "../../components/button";
import AddValue from "./AddValue";
import { makeDelete, makePut } from "../../services/api";
import { cx } from "../../utils/utils";
import {
    AiFillEdit,
    AiFillDelete,
    AiOutlineFunction,
    AiFillCloseCircle,
    AiFillSave,
    AiOutlineSend,
} from "react-icons/ai";

export default function Table() {
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);
    const [send, setSend] = useState(false);
    const [response, error, loading, refetch] = useAxios({
        url: "/com",
        method: "GET",
    });

    const inputRefs = Array.from({
        length: 10,
    }).map(() => useRef(null));

    const handleDelete = async (id) => {
        try {
            if (!window.confirm("Are you sure to delete this item?")) return;
            await makeDelete(id);
            error && console.log(error);
            refetch();
        } catch (error) {
            console.log(error);
        }
    };

    async function handleEdit() {
        const data = Object.fromEntries(
            inputRefs.map((item) => [item.current.name, item.current.value])
        );
        data.status = true;

        try {
            await makePut(edit._id, data);
            refetch();
            setEdit(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        !loading &&
        response && (
            <div className="relative min-h-[50vh] mx-auto w-full">
                <div className="flex justify-end mb-2">
                    <Button className={cx("w-full")} onClick={refetch}>
                        Add
                    </Button>
                </div>

                {edit && send && (
                    <EditValue
                        item={edit}
                        refetch={refetch}
                        setEdit={() => {
                            setEdit(false);
                            setSend(false);
                        }}
                    />
                )}
                {add && <AddValue refetch={refetch} setAdd={setAdd} />}
                <table className="mx-auto w-full">
                    <thead className="border-b-1">
                        <tr className=" text-gray-900 uppercase dark:text-gray-400 ">
                            <th className="p-2">No.</th>
                            {!loading &&
                                response &&
                                Object.keys(response[0] ?? {})
                                    .filter((key) => key !== "_id")
                                    .map((item, idx) => (
                                        <th key={idx} className="p-2">
                                            {item}
                                        </th>
                                    ))}

                            <th className="flex justify-end items-center">
                                <AiOutlineFunction size={30} />
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700/30 relative ">
                        {response.length > 0 &&
                            response?.map((item, idx) => (
                                <tr
                                    key={idx}
                                    className="text-center hover:bg-slate-700/10"
                                >
                                    <td>{idx + 1}</td>
                                    {Object.keys(item)
                                        .filter((key) => key !== "_id")
                                        .map((key, idx) => (
                                            <td
                                                key={idx}
                                                className="whitespace-nowrap text-sm text-gray-900 dark:text-gray-100 border-b-1 border-gray-600 p-2"
                                            >
                                                {" "}
                                                {edit &&
                                                !send &&
                                                edit._id === item._id ? (
                                                    <input
                                                        type={
                                                            key === "img"
                                                                ? "file"
                                                                : "text"
                                                        }
                                                        className={cx(
                                                            "w-full p-1 text-gray-900 dark:text-gray-600 rounded-md border-1 border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-transparent",

                                                            key ===
                                                                "createdAt" &&
                                                                key ===
                                                                    "updatedAt"
                                                                ? "bg-gray-200"
                                                                : ""
                                                        )}
                                                        defaultValue={item[key]}
                                                        name={key}
                                                        ref={inputRefs[idx]}
                                                        disabled={
                                                            key ===
                                                                "createdAt" ||
                                                            key === "updatedAt"
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                ) : key === "status" ? (
                                                    <span
                                                        className={` p-1 rounded-full ${
                                                            item[key]
                                                                ? "bg-green-500"
                                                                : "bg-red-500"
                                                        }`}
                                                    />
                                                ) : key === "createdAt" ||
                                                  key === "updatedAt" ? (
                                                    new Date(
                                                        item[key]
                                                    ).toLocaleString("th-TH")
                                                ) : (
                                                    item[key]
                                                )}
                                            </td>
                                        ))}
                                    <td className="whitespace-nowrap border-b-1 border-gray-600">
                                        <div className="flex justify-end items-center gap-2">
                                            <span className="rounded-md cursor-pointer hover:outline-none hover:bg-green-600/10 p-1">
                                                {" "}
                                                {edit &&
                                                !send &&
                                                edit._id === item._id ? (
                                                    <AiFillCloseCircle
                                                        size={20}
                                                        color="red"
                                                        onClick={() =>
                                                            setEdit(false)
                                                        }
                                                    />
                                                ) : (
                                                    <AiFillEdit
                                                        size={20}
                                                        color="green"
                                                        onClick={() =>
                                                            setEdit(item)
                                                        }
                                                    />
                                                )}
                                            </span>
                                            <span className="flex gap-3">
                                                {edit &&
                                                edit._id === item._id ? (
                                                    <>
                                                        <AiFillSave
                                                            size={20}
                                                            color="green"
                                                            onClick={handleEdit}
                                                            className="rounded-md cursor-pointer hover:outline-none hover:bg-green-600/10"
                                                        />
                                                    </>
                                                ) : (
                                                    <AiFillDelete
                                                        size={20}
                                                        color="red"
                                                        className="rounded-md cursor-pointer hover:outline-none hover:bg-green-600/10 "
                                                        onClick={() =>
                                                            handleDelete(
                                                                item._id
                                                            )
                                                        }
                                                    />
                                                )}
                                            </span>
                                            <AiOutlineSend
                                                size={20}
                                                color="red"
                                                className="rounded-md cursor-pointer hover:outline-none hover:bg-green-600/10 "
                                                onClick={() => {
                                                    setEdit(item);
                                                    setSend(true);
                                                }}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        )
    );
}

Table.propTypes = {
    data: PropTypes.array,
    dataHeader: PropTypes.array,
    onSubmit: PropTypes.func,
    delItem: PropTypes.func,
};
Table.defaultProps = {
    data: [],
    dataHeader: [],
    onSubmit: () => {},
    delItem: () => {},
};
