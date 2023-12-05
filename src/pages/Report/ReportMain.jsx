import { IoDesktopOutline } from "react-icons/io5";
import ReportForm from "./ReportForm";
// import { useRef } from "react";

export default function ReportMain() {
    return (
        <div className="min-h-[70vh] p-2 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-5">
                <ReportForm />
                <IoDesktopOutline className="text-9xl text-gray-500" />
            </div>
        </div>
    );
}
