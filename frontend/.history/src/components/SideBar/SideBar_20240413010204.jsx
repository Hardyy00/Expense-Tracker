import { NavLink } from "react-router-dom";
import image from "../../assets/img.png";

const links = [
  { path: "/", name: "DashBoard" },
  { path: "/visualization", name: "Visualization" },
];
const SideBar = () => {
  return (
    <div className="bg-[#03071e] w-full h-[100vh] px-4 py-8 flex flex-col items-center justify-between">
      <div className="flex gap-4">
        <div className="w-[3rem] h-[3rem] bg-white rounded-full">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h2>Hey</h2>
          <h1>Hardik Gaur</h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {links.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => (isActive ? "" : "text-[#03071e]")}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default SideBar;
