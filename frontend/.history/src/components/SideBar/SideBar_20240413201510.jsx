import { NavLink } from "react-router-dom";
import image from "../../assets/img.png";

const links = [
  { id: "l1", path: "/", name: "DashBoard" },
  { id: "l2", path: "/visualization", name: "Visualization" },
  { id: "l3", path: "/friends", name: "Friends" },
];
const SideBar = () => {
  return (
    <div className="bg-[#03071e] w-full h-full px-4 py-8 flex flex-col items-center justify-between">
      <div className="flex flex-col item-center justify-center gap-[8rem]">
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

        <div className="flex flex-col gap-10">
          {links.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-[102%]" : "text-[#5d6383]"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default SideBar;
