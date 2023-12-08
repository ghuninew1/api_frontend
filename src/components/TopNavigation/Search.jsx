import { FaSearch } from "react-icons/fa";

const Search = () => (
    <>
        <div className="flex w-auto items-center justify-start bg-gray-400 dark:bg-gray-600 text-gray-500 px-2 ml-0 mr-0 rounded-md shadow-md">
            <input
                className="font-sans font-semibold text-sm bg-transparent outline-none text-gray-500  placeholder-gray-500 pl-1 rounded-md w-5 h-2.5 hover:w-20 transition-all duration-300 ease-in-out focus:0"
                type="text"
                placeholder="Search..."
            />
            <FaSearch size="18" className="text-secondary my-auto" />
        </div>
    </>
);

export default Search;
