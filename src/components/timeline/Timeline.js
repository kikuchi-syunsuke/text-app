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
            <Post
                displayName="プログラミングテスト"
                username="zrts_kkch"
                verified={true}
                text="初めてのツイート"
                avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
                image="https://source.unsplash.com/random"
            />
        </div>
    );
};

export default Timeline;
