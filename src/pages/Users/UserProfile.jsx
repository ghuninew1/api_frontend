import { MdOutlineEdit, MdAccountCircle } from "react-icons/md";

import Button from "./Button";
import useAuth from "../../contexts/useAuth";
import { useNavigate } from "react-router-dom";
import useAxios, { useAxiosFn } from "../../hook/useAxios";
import { useState, useEffect } from "react";

const UserProfile = () => {
    const { isUser, SetLogout } = useAuth();
    const [getUser, setGetUser] = useState(null);
    const navigate = useNavigate();
    const getAxios = useAxios({
        url: "/api/user",
        method: "get",
    });
    // const [response, error, loading, refetch] = useAxios({
    //     url: "/api/users",
    //     method: "get",
    // });
    // const [response, error, loading, axiosFetch] = useAxiosFn();

    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    // const getData = () => {
    //     axiosFetch({
    //         method: "get",
    //         url: "/api/users",
    //     });
    // };
    // useEffect(() => {
    //     getData();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // getData();
        console.log(getAxios);
        setGetUser({
            email: getAxios[0][0].email,
            createdAt: getAxios[0][0].createdAt,
            updatedAt: getAxios[0][0].updatedAt,
        });
    };

    const reload = () => {
        getAxios[3]();
    };
    return (
        <div className="flex justify-between flex-col gap-5 p-5 pt-10 mx-auto items-center anim-zoom-in-up">
            <div className="">
                <p className="">User Profile</p>
            </div>
            <MdAccountCircle className="text-6xl text-gray-900 " />
            <button onClick={handleSubmit}>refetch</button>

            <div className="">
                <div>
                    <p className=" "> {isUser?.username} </p>
                    <p className=" "> {isUser?.email} </p>
                    <p className="">
                        {" "}
                        {isUser?.isAdmin ? "Admin" : "User"}{" "}
                        <MdOutlineEdit className="text-2xl ml-10 inline-flex " />
                    </p>
                    <p className=" "> {getUser?.createdAt} </p>
                    <p className=" "> {getUser?.updatedAt} </p>
                    <p>{getUser?.email}</p>
                </div>
            </div>

            <div className="mt-5 flex  gap-5">
                <Button
                    type={"button"}
                    text={"Logout"}
                    bgColor={"bg-red-500 hover:bg-red-600"}
                    color={"text-white hover:text-gray-100"}
                    onClick={() => {
                        SetLogout();
                        navigate("/login");
                    }}
                    size={"w-full"}
                />
                <button onClick={reload}>reload</button>
            </div>
        </div>
    );
};

export default UserProfile;
