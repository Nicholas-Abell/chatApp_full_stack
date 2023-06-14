import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrentUser from "../../../actions/getCurrentUser";

type SideBarProps = {
  children: React.ReactNode;
};

const SideBar: React.FC<SideBarProps> = async ({ children }) => {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};
export default SideBar;
