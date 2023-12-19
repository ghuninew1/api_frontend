import { cx } from "#utils/utils";
import { forwardRef, useRef, useImperativeHandle } from "react";

const MyInput = forwardRef(function MyInput(
    {
        type,
        name,
        className,
        required,
        label,
        icon,
        error,
        helperText,
        ...props
    },
    ref
) {
    const inputRef = useRef(null);

    useImperativeHandle(
        ref,
        () => {
            return {
                focus() {
                    inputRef.current.focus();
                },
                scrollIntoView() {
                    inputRef.current.scrollIntoView();
                },
            };
        },
        []
    );

    return (
        <div className="relative w-full my-2">
            <label
                htmlFor={name}
                className={cx(
                    "peer-focus:block absolute left-2 -top-5 transition-all duration-400 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[1] peer-data-[te-input-state-active]:-translate-y-[1.7rem] peer-data-[te-input-state-active]:scale-[1] motion-reduce:transition-none origin-bottom text-sm",
                    inputRef.current?.value
                        ? "scale-100"
                        : "scale-0 translate-y-[20px] ",
                    inputRef.current?.value.length < 3
                        ? "text-red-500 dark:text-red-500"
                        : "text-green-500 dark:text-green-500"
                )}
            >
                {label}
            </label>
            <span className="absolute right-2 top-2">{icon}</span>
            <span className="absolute left-2 -bottom-2 text-red-500 text-10">
                {error}
            </span>
            <span className="absolute right-2 bottom-1/3 text-gray-400">
                {helperText}
            </span>
            <input
                ref={inputRef}
                type={type ? type : "text"}
                name={name}
                id={name}
                className={cx(
                    "p-2 pl-8 rounded-md border-2 border-gray-600/50 peer w-full py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100 h-2.5 focus:bg-transparent focus:border-primary focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-primary bg-gray-700/50",
                    className
                )}
                placeholder={label}
                required={required ? true : false}
                {...props}
            />

            <div className="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"></div>
        </div>
    );
});

export default MyInput;
