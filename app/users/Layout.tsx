import React from "react";
import SideBar from "../(site)/components/sidebar/SideBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  return (
    <SideBar>
      <div className="h-full">{children}</div>
    </SideBar>
  );
};
export default Layout;
