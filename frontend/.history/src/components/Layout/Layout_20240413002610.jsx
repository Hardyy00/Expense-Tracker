import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Layout = () => {
  return (
    <div className="bg-[#101935] h-[100vh] relative text-white">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
