import PropTypes from "prop-types";

function InputText({
    labelTitle,
    labelStyle,
    type,
    className,
    defaultValue,
    name,
}) {
    return (
        <div data-te-input-wrapper-init className={`relative ${className}`}>
            <input
                type={type || "text"}
                className="peer block min-h-[auto] w-full rounded border-0 dark:bg-gray-200/5 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInputHelper"
                placeholder={labelTitle}
                name={name}
                defaultValue={defaultValue}
            />
            <label
                htmlFor="exampleFormControlInputHelper"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
                {labelTitle}
            </label>
            <div
                className="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
                data-te-input-helper-ref
            >
                {labelStyle}
            </div>
        </div>
    );
}

InputText.propTypes = {
    labelTitle: PropTypes.string.isRequired,
    labelStyle: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    name: PropTypes.string,
};

export default InputText;
