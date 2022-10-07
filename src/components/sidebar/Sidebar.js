import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";

import SidebarOption from "./SidebarOption";

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* アイコン */}
            <TwitterIcon className="sidebar_twitterIcon" />

            {/* SideBarOption */}
            <SidebarOption text="ホーム" Icon={HomeIcon} />
            <SidebarOption text="ホーム" Icon={HomeIcon} />
            <SidebarOption text="ホーム" Icon={HomeIcon} />
            <SidebarOption text="ホーム" Icon={HomeIcon} />
            <SidebarOption text="ホーム" Icon={HomeIcon} />
            <SidebarOption text="ホーム" Icon={HomeIcon} />
            <SidebarOption text="ホーム" Icon={HomeIcon} />
            {/* 投稿ボタン */}
        </div>
    );
};

export default Sidebar;
