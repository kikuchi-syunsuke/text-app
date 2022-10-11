import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBoxInput">
                    <Avatar />
                    <input placeholder="今どうしてる？" type="text"></input>
                </div>
                <input
                    className="tweetBoxImageInput"
                    placeholder="画像のURLを入力して下さい"
                    type="text"
                ></input>
                <Button className="tweetBoxTweetButton" type="submit">
                    ツイートする
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;
