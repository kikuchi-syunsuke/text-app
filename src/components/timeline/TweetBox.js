import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        addDoc(collection(db, "posts"), {
            displayName: "testtest",
            username: "zrts_kkch",
            verified: true,
            text: tweetMessage,
            avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
            image: tweetImage,
        })

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBoxInput">
                    <Avatar />
                    <input
                        value={tweetMessage}
                        placeholder="今どうしてる？"
                        type="text"
                        onChange={(e) => setTweetMessage(e.target.value)}
                    >
                    </input>
                </div>
                <input
                    value={tweetImage}
                    className="tweetBoxImageInput"
                    placeholder="画像のURLを入力して下さい"
                    type="text"
                    onChange={(e) => setTweetImage(e.target.value)}
                ></input>
                <Button className="tweetBoxTweetButton" type="submit"
                    onClick={sendTweet}
                >
                    ツイートする
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;
