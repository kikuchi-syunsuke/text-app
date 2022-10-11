import React from "react";
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
        </div>
    );
};

export default Timeline;
