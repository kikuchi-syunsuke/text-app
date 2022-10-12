import React from "react";
import "./SideberOption.css";

const SidebarOption = ({ text, Icon }) => {
    return (
        <div className="sideberOption">
            <Icon />
            <h2>{text}</h2>
        </div>
    );
};

export default SidebarOption;
