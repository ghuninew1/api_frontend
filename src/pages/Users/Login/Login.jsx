import { useRef, useState } from "react";
import { ShowError } from "../../../components";
// import { cx } from "../../../utils/utils";
import useAuth from "../../../contexts/useAuth";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { MakeLogin } from "../../Users/auth";
import { BiHide } from "react-icons/bi";
import Input from "../Input";
import Button from "../Button";

export default function Login() {
    const [errors, setErrors] = useState(null);
    const { SetLogin } = useAuth();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = usernameRef.current?.value;
        const passwordData = passwordRef.current?.value;
        if (
            (username === "" || username == null) &&
            (passwordData === "" || passwordData == null)
        ) {
            setErrors("Username and password are required");
            return;
        } else if (username === "" || username == null) {
            setErrors("Username is required");
            return;
        } else if (passwordData === "" || passwordData == null) {
            setErrors("Password is required");
            return;
        } else if (passwordData.length < 6) {
            setErrors("Password must be at least 6 characters");
            return;
        }
        try {
            const res = await MakeLogin(username, passwordData);

            if (res.username === username) {
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

                navigate(from);
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
                <div className="flex flex-col items-center overflow-hidden  bg-slate-800/30 border-gray-700/50 shadow-xl rounded-lg">
                    <h1 className="mt-5 text-3xl font-bold text-center text-slate-300 tracking-wider">
                        Welcome
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
                                className="relative mb-3"
                                data-te-input-wrapper-init
                            >
                                <Input
                                    type="text"
                                    className="peer w-full bg-transparent py-[0.32rem] leading-[1.6] outline-slate-500/50 transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="formUsername"
                                    data-te-input-showcounter="true"
                                    placeholder="Email address or username"
                                    ref={usernameRef}
                                />
                                <label
                                    htmlFor="formUsername"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >
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
                                    className="relative mb-3"
                                    data-te-input-wrapper-init
                                >
                                    <Input
                                        type="password"
                                        className="peer  w-full bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear outline-slate-500/50 focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="forPassword"
                                        placeholder="Password"
                                        data-te-input-showcounter="true"
                                        ref={passwordRef}
                                    />
                                    <label
                                        htmlFor="forPassword"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                        Password
                                    </label>
                                    <div
                                        className="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
                                        data-te-input-helper-ref
                                    ></div>
                                </div>
                                {/* <Input
                                    type="password"
                                    label="Password"
                                    className=" text-slate-600 mb-2"
                                    placeholder="Password"
                                    ref={passwordRef}
                                /> */}
                                <span
                                    className="absolute right-2 top-2 text-slate-500 hover:text-slate-400 h-5 w-5"
                                    onClick={() => {
                                        const password = passwordRef.current;
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
                            <Button
                                color={"text-stark-900 font-bold"}
                                bgColor={"bg-green-500"}
                                bgHoverColor={"bg-green-700"}
                                text={"Login"}
                                type={"submit"}
                                className="my-2"
                            />

                            <div className="mb-4 flex items-center justify-between">
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
                            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    OR
                                </p>
                            </div>

                            {/* <!-- Social login buttons --> */}
                            <div className="w-full">
                                <a
                                    className="bg-[#3b5998] hover:bg-[#233b71] mb-3 flex w-full items-center justify-center rounded px-7 pb-2.5 pt-3 text-center text-sm font-medium  "
                                    href="#!"
                                >
                                    {/* <!-- Facebook --> */}
                                    Continue with Facebook
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
