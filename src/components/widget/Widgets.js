import Search from "@mui/icons-material/Search";
import React from "react";
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import "./Widgets.css";

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

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="zrts_kkch"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://twitter.com/zrts_kkch"}
                    options={{ text: "#Git勉強中", via: "zrts_kkch"}}
                />
            </div>
        </div>
    );
};

export default Widgets;
