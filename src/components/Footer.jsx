import { cx } from "../utils/utils";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer
            className={cx("flex items-center justify-center h-10 bg-black")}
        >
            <div className="w-full p-2 text-sm text-center text-neutral-400">
                © 2023 Copyright:
                <Link className="text-neutral-300 ml-2" to={"/"}>
                    GhuniNew©
                </Link>
            </div>
        </footer>
    );
}
