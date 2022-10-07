import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* アイコン */}
            <TwitterIcon className="sidebar_twitterIcon" />

            {/* SideBarOption */}
            <SidebarOption />

            {/* 投稿ボタン */}
        </div>
    );
};

export default Sidebar;
