import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SidebarOption from "./SidebarOption";
import { Button } from "@mui/material";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* アイコン */}
            <TwitterIcon className="sidebar_twitterIcon" />

            {/* SideBarOption */}
            <SidebarOption text="Home" Icon={HomeIcon} />
            <SidebarOption text="話題を検索" Icon={SearchIcon} />
            <SidebarOption text="通知" Icon={NotificationsNoneIcon} />
            <SidebarOption text="Message" Icon={MailOutlineIcon} />
            <SidebarOption text="bookmark" Icon={BookmarkBorderIcon} />
            <SidebarOption text="リスト" Icon={ListAltIcon} />
            <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
            <SidebarOption text="もっと見る" Icon={MoreHorizIcon} />

            {/* 投稿ボタン */}
            <Button variant="outlined" className="sidebar_tweet">
                投稿する
            </Button>
        </div>
    );
};

export default Sidebar;
