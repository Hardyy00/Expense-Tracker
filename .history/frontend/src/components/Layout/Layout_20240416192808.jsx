import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { apiConnector } from "../../Operations/apiConnector";
import { userActions } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();

  const isPresent = useSelector((state) => state !== null);
  useEffect(() => {
    console.log("executed");
    if (Cookies.get("authToken") && !isPresent) {
      const fetchUserDetails = async () => {
        try {
          const response = await apiConnector(
            "get",
            `http://localhost:8000/${Cookies.get("loginedUser")}`
          );

          // console.log(response.data);
          dispatch(userActions.setUser(response.data)); // Assuming the response contains user data

          // message.success('User Fetched Successfully');
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };

      fetchUserDetails(); // Fetch user details when the component mounts
    }
  }, []);
  return (
    <div className="bg-[#101935] relative text-white w-full">
      <div className="flex">
       {isPresent &&  <div className="w-[15%]">
          <SideBar />
        </div>

        <div className="w-[85%] ">
          <Outlet />
        </div>}
      </div>
    </div>
  );
};

export default Layout;
