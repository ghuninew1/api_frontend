import { useState } from "react";
// import { cx } from "#/utils/utils";
import { AiOutlineFacebook } from "react-icons/ai";
import useInput from "#hook/useInput";
import { Link, useNavigate } from "react-router-dom";
import ButtonLogin from "./ButtonLogin";
import MyInput from "#components/MyInput";
import useLogin from "#hook/useLogin";

export default function Signup() {
    const usernameProps = useInput("");
    const passwordProps = useInput("");
    const confirmPasswProps = useInput("");

    const [error, setError] = useState("");
    const [getRegister, loading] = useLogin("auth/register");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = usernameProps.value;
        const password = passwordProps.value;
        const confirmPassw = passwordProps.value;

        if (!username || !password) {
            setError("Please enter username and password");
        }
        if (password !== confirmPassw) {
            setError("Password and confirm password not match");
        }

        try {
            await getRegister(username, password).then((res) => {
                if (res && !loading) {
                    navigate("/login");
                } else {
                    setError("Username or Password is incorrect");
                }
            });
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="min-h-[80vh] flex justify-center items-center w-full mx-auto animate-[zoomIn_.5s]">
            <div className="flex justify-center w-full">
                <div className="flex flex-col items-center overflow-hidden border-gray-700 shadow-md drop-shadow-md shadow-gray-900 rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-lg bg-gradient-to-tl from-gray-700 to-gray-900 dark:from-gray-900 dark:to-gray-800 text-white">
                    <h1 className="mt-5 text-3xl font-bold text-center tracking-wider uppercase">
                        Signup
                    </h1>

                    {/* <!-- Right column container with form --> */}
                    <section className="relative items-center flex flex-col justify-center mx-auto p-10  ">
                        <form
                            className="min-w-[350px] w-full"
                            onSubmit={handleSubmit}
                        >
                            {error && (
                                <div className="mb-5 text-red-500">{error}</div>
                            )}
                            {/* <!-- Email input --> */}
                            <MyInput
                                name="username"
                                label={"Username"}
                                type={"text"}
                                {...usernameProps}
                            />
                            {/* <!--Password input--> */}
                            <div className="relative w-full mt-6">
                                <MyInput
                                    name="password"
                                    label={"Password"}
                                    type={"password"}
                                    {...passwordProps}
                                />
                            </div>
                            <div className="relative w-full mb-6">
                                <MyInput
                                    name="confirmPassword"
                                    label={"Confirm Password"}
                                    type={"password"}
                                    {...confirmPasswProps}
                                />
                            </div>
                            {/* <!-- Submit button --> */}
                            <ButtonLogin
                                type="submit"
                                disabled={passwordProps.value ? false : true}
                                className={"bg-[#1877F2] hover:bg-[#2064b8] "}
                            />

                            {/* <!-- Divider --> */}
                            <div className="mt-7 flex items-center justify-between">
                                {/* <!-- Forgot password link --> */}
                                <Link
                                    to={"#"}
                                    className="text-sm text-slate-400 hover:text-slate-950 hover:underline"
                                >
                                    Forgot password ?
                                </Link>
                                <Link
                                    to={"/login"}
                                    className="text-sm text-slate-400 hover:text-slate-950 hover:underline"
                                >
                                    Already have an account ?
                                </Link>
                            </div>
                            {/* <!-- Divider --> */}
                            <div className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    OR
                                </p>
                            </div>
                        </form>
                        {/* <!-- Social login buttons --> */}
                        <div className="w-full flex flex-col gap-3 mt-5">
                            <ButtonLogin
                                to={"/auth/google"}
                                className={"bg-[#1877F2] hover:bg-[#2064b8] "}
                                text={"Continue with Google"}
                                icon={
                                    <AiOutlineFacebook
                                        size={35}
                                        className="mt-1"
                                    />
                                }
                            />
                            <ButtonLogin
                                to={"/auth/facebook"}
                                className={"bg-[#1877F2] hover:bg-[#2064b8] "}
                                text={"Continue with Facebook"}
                                icon={
                                    <AiOutlineFacebook
                                        size={35}
                                        className="mt-1"
                                    />
                                }
                            />
                            <ButtonLogin
                                to={"/auth/line"}
                                className={"bg-[#06C755] hover:bg-[#06C700]"}
                                text={"Continue with Line"}
                                icon={
                                    <img
                                        src={"/btn_base.png"}
                                        alt="icon"
                                        className="object-cover"
                                    />
                                }
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
