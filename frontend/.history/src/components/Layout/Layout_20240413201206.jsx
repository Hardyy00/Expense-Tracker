import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Layout = () => {
  return (
    <div className="bg-[#101935] relative text-white w-full">
      <div className="flex">
        <div className="w-[15%]">
          <SideBar />
        </div>

        <div className="w-[85%] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
