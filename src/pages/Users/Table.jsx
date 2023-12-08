import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useInput } from "../../hook/useInput";
import { useAxiosFn } from "../../hook/useAxios";

const Table = ({ data, dataHeader, delItem }) => {
    const [edit, setEdit] = useState(null);
    const [response, error, loading, axiosFetch] = useAxiosFn();

    const getUser = () => {
        axiosFetch({
            url: "/auth/user",
            method: "GET",
        });
    };

    const editUser = (id, data) => {
        axiosFetch({
            url: `/auth/user/${id}`,
            method: "PUT",
            config: {
                data,
            },
        });
    };

    const addUser = (data) => {
        axiosFetch({
            url: `/auth/user`,
            method: "POST",
            config: {
                data,
            },
        });
    };

    const delUser = (id) => {
        axiosFetch({
            url: `/auth/user/${id}`,
            method: "DELETE",
        });
    };

    const onSubmitEdit = (e) => {
        e.preventDefault();
        console.log(e.target.Name.value, e.target.IP.value);
    };

    const EditValue = (item) => {
        return (
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full z-20 bg-gray-800 anim-zoom-in">
                <h1 className="mb-2 text-2xl font-bold text-white">
                    Edit User
                </h1>
                <form
                    className="flex w-full p-4 rounded-md shadow-md justify-center items-center gap-2"
                    onSubmit={onSubmitEdit}
                >
                    {Object.keys(item)
                        // .filter((key) => key !== "id")
                        .map((key, idx) => (
                            <div key={idx} className="flex flex-col mb-2">
                                <label className="mb-2 text-sm font-bold text-gray-300">
                                    {key}
                                </label>
                                <input
                                    className="p-2 h-2 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    type="text"
                                    defaultValue={item[key]}
                                    name={key}
                                />
                            </div>
                        ))}
                    <button
                        className="px-3 h-10 mt-3 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        type="submit"
                    >
                        Submit
                    </button>
                    <button
                        className="px-3 h-10 mt-3 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
                        type="button"
                        onClick={() => setEdit(null)}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        );
    };
    return (
        <div className="relative w-full overflow-x-auto">
            {edit && EditValue(edit)}
            <table className="w-full text-center ">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr className="font-medium tracking-wider text-gray-900 uppercase dark:text-gray-300 ">
                        {dataHeader.map((item, idx) => (
                            <th key={idx} className="text-center">
                                {item}
                            </th>
                        ))}
                        <th
                            className="text-right whitespace-nowrap "
                            onClick={() => getUser()}
                        >
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/30 relative">
                    {data.map((item, idx) => (
                        <tr
                            key={idx}
                            className="text-center hover:bg-slate-700/10"
                        >
                            {Object.keys(item).map((key, idx) => (
                                <td
                                    key={idx}
                                    className="px-3 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100"
                                >
                                    {item[key]}
                                </td>
                            ))}
                            <td className="text-right whitespace-nowrap">
                                <button
                                    className="px-3 py-2 text-xs text-white bg-blue-500 rounded-md"
                                    onClick={() => setEdit(item)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="px-3 py-2 ml-1 text-xs text-white bg-red-500 rounded-md"
                                    onClick={() => delItem(item?.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

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
