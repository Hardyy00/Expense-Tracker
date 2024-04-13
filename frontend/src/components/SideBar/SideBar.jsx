import { NavLink, useNavigate } from "react-router-dom";
import image from "../../assets/img.png";
import Cookies from "js-cookie";
import { GrLogout } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { PiGraphFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { apiConnector } from "../../Operations/apiConnector";
// const links = [
//   { path: "/dashboard", name: "DashBoard" },
//   { path: "/dashboard/visualization", name: "Visualization" },
// ];

const SideBar = () => {
  const [userDetails, setUserDetails] = useState(null); // State to store user details

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
      // alert("hello");
      localStorage.removeItem("authToken");
      Cookies.remove("authToken");
      Cookies.remove("loginedUser");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#03071e] w-full h-[100vh] px-4 py-8 flex flex-col items-center justify-between">
      <div className="flex gap-4">
        <div className="w-[3rem] h-[3rem] bg-white rounded-full">
          <img
            src={userDetails&&userDetails.profilePhoto}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h2>Hey</h2>
          <h1>{ userDetails&&(userDetails.gender=='Male')?'Mr.':'Mrs.'}{userDetails && userDetails.name}</h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {" "}
        {/* Removed extra '<' here */}
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
      </div>

      <NavLink
        to="/"
        onClick={handleLogout}
        className="sm:focus:bg-sky-700 sm:flex sm:focus:text-white sm:p-[1rem] sm:rounded-full sm:pl-[2rem] sm:items-center sm:text-blue-900 sm:bold sm:p-[10px] sm:border-rounded sm:bg-red-400 sm:text-center sm:justify-center"
      >
        <GrLogout className=" sm:text-blue-800" />
        Logout
      </NavLink>
    </div>
  );
};

export default SideBar;
