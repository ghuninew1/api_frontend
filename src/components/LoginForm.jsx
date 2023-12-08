import {
    AiOutlineArrowRight,
    AiOutlineKey,
    AiOutlineUser,
} from "react-icons/ai";

import { Button } from "./button";

export default function LoginForm() {
    return (
        <form className="space-y-3 ">
            <div className="flex flex-col items-center overflow-hidden border-gray-700 shadow-md drop-shadow-md shadow-gray-900 rounded-xl dark:bg-neutral-900/20 bg-gray-300/20 dark:border-neutral-800 dark:text-neutral-200 p-10">
                <h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
                <div className="w-full">
                    <div>
                        <div className="relative mt-5 text-sm">
                            <input
                                className="p-2 rounded-md border-2 border-gray-300/10 peer w-full bg-transparent py-[0.32rem] leading-[1.6] outline-slate-400/50 transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                            />
                            <label
                                className="pointer-events-none absolute left-0 pl-8 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.9] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.7rem] peer-data-[te-input-state-active]:scale-[0.9] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <AiOutlineUser className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="relative text-sm">
                            <input
                                className="p-2 rounded-md border-2 border-gray-300/10 peer w-full bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear outline-slate-500/50 focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                                minLength={6}
                            />
                            <label
                                className="pointer-events-none absolute left-0 top-0 pl-8  max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.9] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.7rem] peer-data-[te-input-state-active]:scale-[0.9] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <AiOutlineKey className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                <LoginButton />
                <div className="flex h-8 items-end space-x-1">
                    {/* Add form errors here */}
                </div>
            </div>
        </form>
    );
}

function LoginButton() {
    return (
        <Button className="mt-4 w-full">
            Log in{" "}
            <AiOutlineArrowRight className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
    );
}
