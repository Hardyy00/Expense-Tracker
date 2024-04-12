import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Layout = () => {
  return (
    <div className="bg-[#101935] h-[100vh] relative text-white">
      <div className="flex">
        <div className="w-15%">
          <SideBar />
        </div>
        <div className="w-85% border border-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
