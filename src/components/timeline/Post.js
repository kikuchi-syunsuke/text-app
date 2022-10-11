import {
    ChatBubbleOutline,
    FavoriteBorder,
    PublishOutlined,
    Repeat,
    VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

const Post = () => {
    return (
        <div className="post">
            <div className="postAvatar">
                <Avatar />
            </div>
            <div className="postBody">
                <div className="postHeader">
                    <div className="postHeaderText">
                        <h3>
                            プログラミングテスト
                            <span className="postHeaderSpecial">
                                <VerifiedUser className="postBadge" />
                                @kmch_synsk
                            </span>
                        </h3>
                    </div>
                    <div className="postHeaderDescription">
                        <p>reactなう</p>
                    </div>
                </div>
                <img src="https://source.unsplash.com/random" alt="postImage" />
                <div className="postFooter">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorder fontSize="small" />
                    <PublishOutlined fontSize="small" />
                </div>
            </div>
        </div>
    );
};

export default Post;
