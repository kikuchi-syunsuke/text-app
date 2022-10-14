import React from "react";
import "./SideberOption.css";

const SidebarOption = ({ text, Icon, active }) => {
    return (
        <div className={`sideberOption ${active && "sideberOptionActive"}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
};

export default SidebarOption;
