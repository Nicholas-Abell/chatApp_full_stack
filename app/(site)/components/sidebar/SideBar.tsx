import React from "react";
import DesktopSidebar from "./DesktopSidebar";

type SideBarProps = {
  children: React.ReactNode;
};

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};
export default SideBar;
