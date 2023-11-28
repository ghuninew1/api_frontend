import { useRef, useState } from "react";
import { Input, Button, ShowError, LogedIn } from "../components";
import { cx } from "../utils/utils";
import { useAuthContext } from "../contexts/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [errors, setErrors] = useState(null);
    const { changeUser } = useAuthContext();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
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
            const data = await LogedIn(username, passwordData);
            console.log(data);
            changeUser({
                username: data.username,
                email: data.email,
                token: data.tokens[0]?.token,
                isLogIn: true,
                isAdmin: false,
                isVerified: true,
                expirationTime: data.tokens[0]?.expires,
                timeStamps: data.updatedAt,
            });

            navigate("/");
        } catch (error) {
            setErrors(error);
        }
    };

    return (
        <section className="min-h-[70vh] w-full flex justify-center items-center mx-auto anim-zoom-in-down relative">
            <div
                className={cx(
                    errors ? "anim-zoom-in " : "anim-zoom-out ",
                    "absolute top-0 bg-red-500 h-16 w-screen"
                )}
            >
                <ShowError error={errors} setError={setErrors} />
            </div>
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-center overflow-hidden py-10 ">
                    {/* <!-- Left column container with background--> */}
                    <div className=" md:w-[500px] hidden lg:block">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone image"
                        />
                    </div>

                    {/* <!-- Right column container with form --> */}
                    <div className="items-center flex justify-center mx-auto py-10 px-10 rounded-lg bg-slate-800/50 border border-gray-700/50 max-w-xl shadow-xl ">
                        <form className="w-full" onSubmit={handleSubmit}>
                            {/* <!-- Email input --> */}
                            <label
                                className="py-0 text-slate-400"
                                htmlFor="exampleInputEmail1"
                            >
                                Email address or username
                            </label>
                            <Input
                                type="text"
                                label="Email address"
                                className=" text-slate-600 mb-2"
                                placeholder="Email address or username"
                                id="exampleInputEmail1"
                                ref={usernameRef}
                            />

                            {/* <!--Password input--> */}

                            <label
                                className="text-slate-400"
                                htmlFor="exampleInputPassword1"
                            >
                                Password
                            </label>
                            <div className="relative w-full">
                                <Input
                                    type="password"
                                    label="Password"
                                    className=" text-slate-600 mb-2"
                                    placeholder="Password"
                                    id="exampleInputPassword1"
                                    ref={passwordRef}
                                />
                            </div>

                            {/* <!-- Submit button --> */}
                            <Button
                                bgColor={"bg-green-500 hover:bg-green-600"}
                                text={"Login"}
                                type={"submit"}
                                className="my-3 py-2.5 "
                            />

                            <div className="mb-5 mt-2 flex items-center justify-between">
                                {/* <!-- Forgot password link --> */}
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 hover:text-slate-950 hover:underline"
                                >
                                    Forgot password ?
                                </a>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 hover:text-slate-950 hover:underline"
                                >
                                    Create account ?
                                </a>
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
                                    role="button"
                                >
                                    {/* <!-- Facebook --> */}
                                    Continue with Facebook
                                </a>
                            </div>
                            <div className="w-full">
                                <a
                                    className="bg-[#55acee] hover:bg-[#4193d1] mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium  "
                                    href="#"
                                    role="button"
                                >
                                    {/* <!-- Twitter --> */}
                                    Continue with Twitter
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
