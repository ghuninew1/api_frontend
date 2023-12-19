import { cx } from "#utils/utils";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className={cx("flex items-center justify-center")}>
            <div className="w-full p-2 h-10 text-sm text-center text-neutral-600 dark:text-neutral-300 shadow-lg shadow-slate-800 dark:shadow-slate-200">
                © 2023 Copyright:
                <Link
                    className="text-neutral-700 ml-2 dark:text-neutral-300"
                    to={"/"}
                >
                    GhuniNew©
                </Link>
            </div>
        </footer>
    );
}
