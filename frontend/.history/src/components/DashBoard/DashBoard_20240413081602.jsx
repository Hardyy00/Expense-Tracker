import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const DashBoard = () => {
  return (
    <div className="px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[2.5rem]">DashBoard</h1>

        <div className="flex gap-6 item-center">
          <div className="flex relative">
            <input
              type="text"
              className="rounded-md outline-none focus:outline-none active:outline-none text-black p-[0.5rem]"
              onKeyDown={(event) => event.key === "Enter" && console.log("sg")}
            />
            <FaSearch className="text-red-500 absolute right-2 top-2" />
          </div>

          <IoIosNotifications className="text-green text-[2rem]" />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;