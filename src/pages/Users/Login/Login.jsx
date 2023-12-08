import { useState, useEffect } from "react";
import { ShowError } from "../../../components";
// import { cx } from "../../../utils/utils";
import { useAuth } from "../../../contexts/useAuth";
// import { useInput } from "../../../hook/useInput";
import {
    AiOutlineArrowRight,
    AiOutlineKey,
    AiOutlineUser,
} from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
import { makeLogin } from "../../Users/auth";
import { BiHide } from "react-icons/bi";
import { Button } from "../../../components/button";

export default function Login() {
    const [errors, setErrors] = useState(null);
    const { isUser, SetLogin } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isUser?.isLogIn === true && isUser?.token) {
            navigate("/", { replace: true });
        }
    }, [navigate, isUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const passwordData = e.target.password.value;

        if (
            (username === "" || username == null) &&
            (passwordData === "" || passwordData == null)
        ) {
            setErrors("Username and password are required");
            return;
        }

        if (username === "" || username == null) {
            setErrors("Username is required");
            return;
        }

        try {
            const res = await makeLogin(username, passwordData);

            if (res && res.username == username) {
                SetLogin({
                    username: res.username,
                    email: res.email,
                    token: res.token,
                    isLogIn: true,
                    isAdmin: false,
                    expirationTime: res.expires,
                    updatedAt: res.updatedAt,
                    timeStamps: Date.now(),
                });
            } else {
                setErrors(res || "Something went wrong");
            }
        } catch (error) {
            setErrors(error);
        }
    };

    return (
        <div className="min-h-[70vh] flex justify-center items-center w-full mx-auto anim-zoom-in-down">
            <div className="flex justify-center w-full">
                <div className="flex flex-col items-center overflow-hidden border-gray-700 shadow-md drop-shadow-md shadow-gray-900 rounded-xl dark:bg-neutral-900/50 bg-gray-300 dark:border-neutral-800 dark:text-neutral-200">
                    <h1 className="mt-5 text-3xl font-bold text-center text-slate-700 dark:text-slate-300 tracking-wider">
                        Login
                    </h1>

                    {/* <!-- Right column container with form --> */}
                    <div className="relative items-center flex flex-col justify-center mx-auto p-10  ">
                        <ShowError error={errors} setError={setErrors} />
                        <form
                            className="min-w-[350px] w-full"
                            onSubmit={handleSubmit}
                        >
                            {/* <!-- Email input --> */}
                            <div
                                className="relative mb-4 text-sm"
                                data-te-input-wrapper-init
                            >
                                <AiOutlineUser className="absolute left-2 top-2 text-slate-500 dark:text-neutral-200" />
                                <input
                                    type="text"
                                    className="p-2 pl-8 rounded-md border-2 border-gray-300/5 peer w-full bg-transparent py-[0.32rem] leading-[1.6] outline-slate-400/50 transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    data-te-input-showcounter="true"
                                    placeholder="Email address or username"
                                    name="username"
                                    required
                                />
                                <label className="pointer-events-none absolute left-0 top-0 pl-8 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[1] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.7rem] peer-data-[te-input-state-active]:scale-[1] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                    Username or Email
                                </label>
                                <div
                                    className="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
                                    data-te-input-helper-ref
                                ></div>
                            </div>

                            {/* <!--Password input--> */}

                            <div className="relative w-full mt-5">
                                <div
                                    className="relative mb-3 text-sm"
                                    data-te-input-wrapper-init
                                >
                                    <AiOutlineKey className="absolute left-2 top-2 text-slate-500 dark:text-neutral-200" />
                                    <input
                                        type="password"
                                        className="p-2 pl-8 rounded-md border-2 border-gray-300/5 peer w-full bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear outline-slate-500/50 focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        placeholder="Password"
                                        data-te-input-showcounter="true"
                                        name="password"
                                        required
                                        minLength={6}
                                    />
                                    <label className="pointer-events-none absolute left-0 pl-8 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[1] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.7rem] peer-data-[te-input-state-active]:scale-[1] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                        Password
                                    </label>
                                    <div
                                        className="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
                                        data-te-input-helper-ref
                                    ></div>
                                </div>

                                <span
                                    className="absolute right-2 top-2 text-slate-500 hover:text-slate-400 h-5 w-5"
                                    onClick={() => {
                                        const password =
                                            document.querySelector("#password");
                                        if (password.type === "password") {
                                            password.type = "text";
                                        } else {
                                            password.type = "password";
                                        }
                                    }}
                                >
                                    <BiHide />
                                </span>
                            </div>

                            {/* <!-- Submit button --> */}
                            <Button className="w-full" type={"submit"}>
                                Log in{" "}
                                <AiOutlineArrowRight
                                    className="anim-arrow-idle"
                                    size={30}
                                />
                            </Button>

                            <div className="my-3 flex items-center justify-between">
                                {/* <!-- Forgot password link --> */}
                                <Link
                                    to={"#"}
                                    className="text-sm text-slate-400 hover:text-slate-950 hover:underline"
                                >
                                    Forgot password ?
                                </Link>
                                <Link
                                    to={"/register"}
                                    className="text-sm text-slate-400 hover:text-slate-950 hover:underline"
                                >
                                    Create account ?
                                </Link>
                            </div>

                            {/* <!-- Divider --> */}
                            <div className="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    OR
                                </p>
                            </div>

                            {/* <!-- Social login buttons --> */}
                            <div className="w-full">
                                <Button className="w-full">
                                    Log in with Google{" "}
                                    <AiOutlineArrowRight className="" />
                                </Button>
                                {/* <!-- Facebook --> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
