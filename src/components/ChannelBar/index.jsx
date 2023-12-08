import { useState } from "react";
import { BsHash } from "react-icons/bs";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

const topics = ["tailwind-css", "react"];
const questions = ["jit-compilation", "purge-files", "dark-mode"];
const random = ["variants", "plugins"];

const ChannelBar = () => {
    return (
        <div className="channel-bar shadow-lg">
            <ChannelBlock />
            <div className="channel-container">
                <Dropdown header="Topics" selections={topics} />
                <Dropdown header="Questions" selections={questions} />
                <Dropdown header="Random" selections={random} />
            </div>
        </div>
    );
};

const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="dropdown">
            <div
                onClick={() => setExpanded(!expanded)}
                className="dropdown-header"
            >
                <ChevronIcon expanded={expanded} />
                <h5
                    className={
                        expanded
                            ? "dropdown-header-text-selected"
                            : "dropdown-header-text"
                    }
                >
                    {header}
                </h5>
                <FaPlus
                    size="12"
                    className="text-accent text-opacity-80 my-auto ml-auto"
                />
            </div>
            {expanded &&
                selections &&
                selections.map((selection, idx) => (
                    <TopicSelection key={idx} selection={selection} />
                ))}
        </div>
    );
};

Dropdown.propTypes = {
    header: PropTypes.string.isRequired,
    selections: PropTypes.arrayOf(PropTypes.string),
};

const ChevronIcon = ({ expanded }) => {
    const chevClass = "text-accent text-opacity-80 my-auto mr-1";
    return expanded ? (
        <FaChevronDown size="14" className={chevClass} />
    ) : (
        <FaChevronRight size="14" className={chevClass} />
    );
};

ChevronIcon.propTypes = {
    expanded: PropTypes.bool.isRequired,
};

const TopicSelection = ({ selection }) => (
    <div className="dropdown-selection">
        <BsHash size="24" className="text-gray-400" />
        <h5 className="dropdown-selection-text">{selection}</h5>
    </div>
);

TopicSelection.propTypes = {
    selection: PropTypes.string.isRequired,
};

const ChannelBlock = () => (
    <div className="channel-block">
        <h5 className="channel-block-text">Channels</h5>
    </div>
);

export default ChannelBar;
