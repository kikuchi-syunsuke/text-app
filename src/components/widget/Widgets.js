import Search from "@mui/icons-material/Search";
import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgetsInput">
                <Search className="widgetsSearchIcon" />
                <input placeholder="キーワード検索" type="text" />
            </div>
            <div className="widgetsWidgetContainer">
                <h2>今どうしてる？</h2>

                {/* ライブラリを追加 */}
                <TwitterTweetEmbed tweetId="1475764828208009220" />
            </div>
        </div>
    );
};

export default Widgets;
