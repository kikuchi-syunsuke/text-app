import React, { useState } from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Timeline = () => {

    const [posts, setPosts] = useState([]);

    const postData = collection(db, "posts");
    getDocs(postData).then((querySnapshot) => {
        setPosts(querySnapshot.docs.map((doc) => doc.data()))
    });


    return (
        <div className="timeline">
            {/* Header */}
            <div className="timelineHeader">
                <h2>ホーム</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />
            {/* Post */}
            {posts.map((post) => (
                <Post
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
        </div>
    );
};

export default Timeline;
