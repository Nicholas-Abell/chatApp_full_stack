import SideBar from "../(site)/components/sidebar/SideBar";
import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  const users = await getUsers();
  return (
    <SideBar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </SideBar>
  );
};
export default Layout;
