import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { MdDashboard } from "react-icons/md";
import { PiGraphFill } from "react-icons/pi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { apiConnector } from "../../Operations/apiConnector";

const SideBar = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await apiConnector(
          "get",
          `http://localhost:8000/${Cookies.get("loginedUser")}`
        );
        setUserDetails(response.data); // Assuming the response contains user data
        console.log(response.data);
        // message.success('User Fetched Successfully');
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserDetails(); // Fetch user details when the component mounts
  }, []);

  let navigate = useNavigate();

  const handleLogout = () => {
    try {
      localStorage.removeItem("authToken");
      Cookies.remove("authToken");
      Cookies.remove("loginedUser");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#03071e] w-full h-full px-4 py-8 flex flex-col items-center justify-between">
      <div className="flex gap-4">
        <div className="w-[3rem] h-[3rem] bg-white rounded-full">
          <img
            src={userDetails && userDetails.profilePhoto}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h2>Hey</h2>
          <h1>
            {userDetails && userDetails.gender == "Male" ? "Mr." : "Mrs."}
            {userDetails && userDetails.name}
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-[102%] flex" : "text-[#5d6383] flex"
          }
        >
          <MdDashboard className="sm:mr-[1rem] sm:text-white flex text-[20px]" />
          DashBoard
        </NavLink>

        <NavLink
          to="/dashboard/visualization"
          className={({ isActive }) =>
            isActive ? "text-[102%] flex" : "text-[#5d6383] flex"
          }
        >
          <PiGraphFill className="sm:mr-[1rem] sm:text-white text-[20px]" />
          Visualization
        </NavLink>

        <NavLink
          to="/dashboard/notifier"
          className={({ isActive }) =>
            isActive ? "text-[102%] flex" : "text-[#5d6383] flex"
          }
        >
          <PiGraphFill className="sm:mr-[1rem] sm:text-white text-[20px]" />
          Notifier
        </NavLink>
      </div>
      <div></div>

      <div>
        <button
          onClick={handleLogout}
          className="flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          <RiLogoutBoxRLine className="w-6 h-6 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
