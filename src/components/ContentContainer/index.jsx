import TopNavigation from "../TopNavigation/TopNavigation";
import { BsPlusCircleFill } from "react-icons/bs";
// import { useState } from 'react';
import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";

const ContentContainer = ({ children }) => {
    return (
        <div className="content-container">
            <TopNavigation />
            <div className="content-list">
                <Post name="Ada" timestamp="one week ago" text={``} />
                <Post
                    name="Leon"
                    timestamp="one week ago"
                    text={`Lorem ipsum dolor. `}
                />
                <Post name="Jill" timestamp="5 days ago" text={`Lorem.`} />
                {children}
            </div>
            <BottomBar />
        </div>
    );
};
ContentContainer.propTypes = {
    children: PropTypes.node,
};

const BottomBar = () => (
    <div className="bottom-bar">
        <PlusIcon />
        <input
            type="text"
            placeholder="Enter message..."
            className="bottom-bar-input"
        />
    </div>
);

const Post = ({ name, timestamp, text }) => {
    const seed = Math.round(Math.random() * 100);
    return (
        <div className={"post"}>
            <div className="avatar-wrapper">
                <FaUserCircle
                    size="22"
                    className="text-green-500 dark:text-primary"
                />
            </div>

            <div className="post-content">
                <p className="post-owner">
                    {name}
                    <small className="timestamp">{timestamp}</small>
                </p>
                <p className="post-text">{text}</p>
            </div>
        </div>
    );
};

Post.propTypes = {
    name: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

const PlusIcon = () => (
    <BsPlusCircleFill
        size="22"
        className="text-green-500 dark:shadow-lg mx-2 dark:text-primary"
    />
);

export default ContentContainer;
