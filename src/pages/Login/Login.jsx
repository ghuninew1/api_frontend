import { useState } from "react";
// import { cx } from "#/utils/utils";
import useInput from "#hook/useInput";
import {
    AiFillEyeInvisible,
    AiFillEye,
    AiOutlineFacebook,
    AiOutlineGoogle,
    AiOutlineArrowRight,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import ButtonLogin from "./ButtonLogin";
import MyInput from "#components/MyInput";
import useLogin from "#hook/useLogin";
import { useAuth } from "#contexts/useAuthContext";
import Button from "#components/Button";

export default function Login() {
    const usernameProps = useInput("");
    const passwordProps = useInput("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [error, setError] = useState("");
    const [loginMain, loading] = useLogin("auth/login");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = usernameProps.value;
        const password = passwordProps.value;

        if (!username || !password) {
            setError("Please enter username and password");
        }

        try {
            await loginMain(username, password).then((res) => {
                if (res && !loading) {
                    login({
                        email: res.email,
                        username: res.username,
                        roles: res.roles,
                        img: res.img,
                        expires: res.expires,
                        token: res.refreshToken,
                        timestamp: new Date().getTime(),
                    });
                    navigate("/");
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
                    <h1 className="mt-2 text-3xl font-bold text-center tracking-wider uppercase">
                        Login
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
                            <div className="relative w-full mt-5">
                                <MyInput
                                    name="password"
                                    label={"Password"}
                                    helperText={
                                        isPasswordVisible ? (
                                            <AiFillEyeInvisible
                                                className="cursor-pointer"
                                                onClick={
                                                    handlePasswordVisibility
                                                }
                                            />
                                        ) : (
                                            <AiFillEye
                                                className="cursor-pointer"
                                                onClick={
                                                    handlePasswordVisibility
                                                }
                                            />
                                        )
                                    }
                                    type={
                                        isPasswordVisible ? "text" : "password"
                                    }
                                    {...passwordProps}
                                />
                            </div>
                            {/* <!-- Submit button --> */}
                            <Button
                                type="submit"
                                variant="no"
                                disabled={passwordProps.value ? false : true}
                                loading={loading}
                                className={
                                    "relative bg-[#1877F2] hover:bg-[#2064b8] w-full text-xl font-semibold mt-3"
                                }
                            >
                                LOGIN
                                <AiOutlineArrowRight
                                    size={30}
                                    className="absolute right-10 animate-arrowIdle"
                                />
                            </Button>

                            {/* <!-- Divider --> */}
                            <div className="mt-5 flex items-center justify-between">
                                {/* <!-- Forgot password link --> */}
                                <Link
                                    to={"#"}
                                    className="text-sm text-slate-400 hover:text-slate-950 hover:underline"
                                >
                                    Forgot password ?
                                </Link>
                                <Link
                                    to={"/signup"}
                                    className="text-sm text-slate-400 hover:text-slate-950 hover:underline"
                                >
                                    Create account ?
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
                        <div className="w-full flex flex-col gap-2 mt-5">
                            <ButtonLogin
                                to={"/auth/google"}
                                className={
                                    "bg-[#fff] hover:bg-[#e7e2e2] text-black"
                                }
                                text={"Login with Google"}
                                icon={<AiOutlineGoogle size={30} />}
                            />
                            <ButtonLogin
                                to={"/auth/facebook"}
                                className={"bg-[#1877F2] hover:bg-[#2064b8] "}
                                text={"Login with Facebook"}
                                icon={<AiOutlineFacebook size={30} />}
                            />
                            <ButtonLogin
                                to={"/auth/line"}
                                className={
                                    "bg-[#06C755] hover:bg-[#06C755] text-white"
                                }
                                text={"Login with Line"}
                                icon={
                                    <img
                                        src={"/btn_base.png"}
                                        alt="icon"
                                        width={30}
                                        height={30}
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
