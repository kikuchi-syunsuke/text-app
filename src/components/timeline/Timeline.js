import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import FlipMove from "react-flip-move";

const Timeline = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const postData = collection(db, "posts");
        const q = query(postData, orderBy("timestamp", "desc"));
        //getDocs(q).then((querySnapshot) => {
        //    setPosts(querySnapshot.docs.map((doc) => doc.data()))
        //});

        onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => doc.data()))
        })

    }, [])


    return (
        <div className="timeline">
            {/* Header */}
            <div className="timelineHeader">
                <h2>ホーム</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />
            {/* Post */}
            <FlipMove>
                {posts.map((post) => (
                    <Post
                    key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>
        </div>
    );
};

export default Timeline;
