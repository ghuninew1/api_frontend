import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import PropTypes from "prop-types";

const AddItem = ({ newItem, setNewItem, handleSubmit, label, ...props }) => {
    const inputRef = useRef();

    return (
        <form
            {...props}
            className="flex items-center justify-center"
            onSubmit={handleSubmit}
        >
            <label htmlFor={`addItem${label}`} className="sr-only">
                Add {label}
            </label>
            <input
                autoFocus
                ref={inputRef}
                id={`addItem${label}`}
                type="text"
                placeholder={`Add ${label}`}
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type="submit"
                aria-label="Add Item"
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    );
};
AddItem.propTypes = {
    newItem: PropTypes.string,
    setNewItem: PropTypes.func,
    handleSubmit: PropTypes.func,
    label: PropTypes.string,
};

export default AddItem;
