import { useRef, useState } from "react";

export default function ReportForm() {
    const fileRef = useRef(null);
    const [showImage, setShowImage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const report = {
            report: e.target.report.value || "",
            image: fileRef.current?.files[0] || "",
        };
        console.log("submit", report);
    };

    const clearImage = (e) => {
        e?.preventDefault();
        setShowImage(false);
        fileRef.current.value = "";
    };

    const chearForm = (e) => {
        e.preventDefault();
        e.target.report.value = "";
        e.target.location.value = "";
        e.target.city.value = "";
        e.target.state.value = "";
        e.target.zip.value = "";
        clearImage();
    };

    return (
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Report
                    </label>
                    <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        name="report"
                        type="text"
                        placeholder="Report"
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Image
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="image"
                        type="file"
                        placeholder="Image"
                        ref={fileRef}
                        onChange={() => setShowImage(true)}
                    />
                    <button
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        onClick={clearImage}
                    >
                        Clear Image
                    </button>
                </div>
                {showImage && (
                    <div className="w-full px-3 max-w-lg">
                        <img
                            className="w-1/2"
                            src={
                                URL.createObjectURL(
                                    fileRef.current?.files[0]
                                ) || ""
                            }
                            alt="report"
                        />
                    </div>
                )}
            </div>

            <div className="flex flex-wrap -mx-3 mb-6"></div>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
        </form>
    );
}
