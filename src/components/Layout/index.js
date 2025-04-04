import { Outlet } from "react-router-dom";
import AdminHeader from "../AdminHeader";
import SideBar from "../AdminSideBar";
import AdminMainContainer from "../AdminMainContainer";

const Layout = () => {
  return (
    <>
      <AdminHeader />
      <SideBar />
      <AdminMainContainer>
        <Outlet />
      </AdminMainContainer>
    </>
  );
};

export default Layout;