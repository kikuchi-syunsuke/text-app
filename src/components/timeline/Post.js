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

const Post = ({displayName,username,verified,text,image,avatar}) => {
    return (
        <div className="post">
            <div className="postAvatar">
                <Avatar src={avatar} />
            </div>
            <div className="postBody">
                <div className="postHeader">
                    <div className="postHeaderText">
                        <h3>
                            {displayName}
                            <span className="postHeaderSpecial">
                                <VerifiedUser className="postBadge" />
                                @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="postHeaderDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="postImage" />
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
