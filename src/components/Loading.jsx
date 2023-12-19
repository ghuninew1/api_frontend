const Loading = () => {
    return (
        <div className="inline-flex items-center justify-center gap-3 mx-auto w-full">
            <div
                className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            ></div>
            <span className="inline-block text-gray-700 text-10">
                Loading...
            </span>
        </div>
    );
};

export default Loading;
