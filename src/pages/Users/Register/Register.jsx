import { useRef, useState } from "react";
import { ShowError } from "../../../components";
import { cx } from "../../../utils/utils";
import { useNavigate, Link } from "react-router-dom";
import { makeRegister } from "../../Users/auth";
import Input from "../Input";
import Button from "../Button";

export default function Register() {
    const [errors, setErrors] = useState(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
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

        await makeRegister(username, passwordData, emailRef.current?.value)
            .then((res) => {
                setErrors(res);
                navigate("/login");
            })
            .catch((err) => setErrors(err));
    };

    return (
        <div className="min-h-[70vh] flex justify-center items-center w-full mx-auto anim-zoom-in-down ">
            <div
                className={cx(
                    errors ? "anim-zoom-in" : "anim-zoom-out",
                    "absolute top-0 bg-red-500 h-16 w-screen"
                )}
            >
                <ShowError error={errors} setError={setErrors} />
            </div>
            <div className="flex flex-col md:flex-row items-center overflow-hidden ">
                {/* <!-- Left column container with background--> */}

                {/* <!-- Right column container with form --> */}
                <div className="items-center flex flex-col justify-center mx-auto rounded-lg bg-slate-800/50 border border-gray-700/50 shadow-xl p-10">
                    <h1 className="pb-3 text-3xl font-bold text-center text-slate-300 tracking-wider">
                        Register
                    </h1>
                    <form className="max-w-[500px]" onSubmit={handleSubmit}>
                        {/* <!-- Email input --> */}
                        <div className="inline-flex gap-4">
                            <div className=" ">
                                <label className="text-slate-400">
                                    username
                                </label>
                                <Input
                                    type="text"
                                    className=" text-white2"
                                    placeholder="Username"
                                    ref={usernameRef}
                                />
                            </div>
                            <div>
                                <label className="text-slate-400 ">
                                    Email address
                                </label>
                                <Input
                                    type="email"
                                    className=" text-white"
                                    placeholder="Email address"
                                    ref={emailRef}
                                />
                            </div>
                        </div>

                        {/* <!--Password input--> */}

                        <div className="mt-3">
                            <label className="text-slate-400">Password</label>
                            <div className="relative w-full">
                                <Input
                                    type="password"
                                    className="mb-2"
                                    placeholder="Password"
                                    ref={passwordRef}
                                />
                            </div>
                        </div>
                        {/* <!-- Submit button --> */}
                        <Button
                            color={"text-stark-700 font-medium"}
                            bgColor={"bg-blue-500 hover:bg-blue-700"}
                            text={"Register"}
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
                                Login
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
                                className="bg-[#3b5998] hover:bg-[#233b71] mb-3 flex w-full items-center justify-center rounded px-7 pb-2.5 pt-3 text-center text-sm font-medium"
                                href="#!"
                                role="button"
                            >
                                {/* <!-- Facebook --> */}
                                Continue with Facebook
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
