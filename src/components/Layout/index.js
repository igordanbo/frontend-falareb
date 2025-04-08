import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminHeader from "../AdminHeader";
import SideBar from "../AdminSideBar";
import AdminMainContainer from "../AdminMainContainer";
import AdminFooter from "../AdminFooter";

const Layout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  return (
    <>
      <AdminHeader isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
      <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
      <AdminMainContainer isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}>
        <Outlet />
      </AdminMainContainer>

    </>
  );

};

export default Layout;