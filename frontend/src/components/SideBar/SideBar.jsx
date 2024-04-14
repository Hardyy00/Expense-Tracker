
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { GrLogout } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { PiGraphFill } from "react-icons/pi";
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
    <div className="bg-[#03071e] w-full h-[100vh] px-4 py-8 flex flex-col items-center justify-start gap-[5rem]">

      <div className="flex gap-4">
        <div className="w-[3rem] h-[3rem] bg-white rounded-full ">
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


      <div className="flex flex-col gap-4 text-[1.5rem] ">
        {" "}
        {/* Removed extra '<' here */}

    
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[102%] flex items-center"
              : "text-[#5d6383] flex  items-center"
          }
        >
          <FaHome className="sm:mr-[1rem] sm:text-white flex text-[20px]" />
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-[102%] flex  items-center"
              : "text-[#5d6383] flex  items-center"
          }
        >
          <MdDashboard className="sm:mr-[1rem] sm:text-white flex text-[20px]" />
          DashBoard
        </NavLink>

        <NavLink
          to="/dashboard/visualization"
          className={({ isActive }) =>
            isActive
              ? "text-[102%] flex  items-center"
              : "text-[#5d6383] flex  items-center"
          }
        >
          <PiGraphFill className="sm:mr-[1rem] sm:text-white text-[20px]" />
          Visualization
        </NavLink>

        <NavLink
          to="/"
          onClick={handleLogout}
          className={({ isActive }) =>
            isActive
              ? "text-[102%] flex  items-center"
              : "text-[#5d6383] flex  items-center"
          }
        >
          <GrLogout className="sm:mr-[1rem] sm:text-white text-[20px]" />
          Logout
        </NavLink>
      </div>


    </div>
  );
};

export default SideBar;
