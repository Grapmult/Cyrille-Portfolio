import React, { useState } from "react";
import "./Sidebar.css";
import Home from "../Home/Home";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import SidebarList from "./SidebarList";

const Sidebar = ({ theme, changeTheme }) => {
    const [expandSidebar, setExpandSidebar] = useState(true);

    const handleExpandClick = () => {
        setExpandSidebar(!expandSidebar);
    };

    return (
        <div className="sidebar-section">
            {/* Sidebar */}
            <div className={expandSidebar ? "sidebar-expand" : "sidebar"}>
                <div className="icon-for-sidebar-expand-and-collapse">
                    <div>
                        <p onClick={handleExpandClick}>
                            {expandSidebar ? (
                                <BsChevronLeft size={30} />
                            ) : (
                                <BsChevronRight size={30} />
                            )}
                        </p>
                    </div>
                </div>

                {/* Sidebar List */}
                <SidebarList expandSidebar={expandSidebar} />
            </div>

            {/* Main Content */}
            <div
                className={`container-fluid ${
                    expandSidebar ? "" : "sidebar-collapsed"
                }`}
            >
                <Home changeTheme={changeTheme} theme={theme} />
            </div>
        </div>
    );
};

export default Sidebar;
