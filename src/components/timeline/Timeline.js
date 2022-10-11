import React from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";

const Timeline = () => {
    return (
        <div className="timeline">
            {/* Header */}
            <div className="timelineHeader">
                <h2>ホーム</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />
            {/* Post */}
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Timeline;
