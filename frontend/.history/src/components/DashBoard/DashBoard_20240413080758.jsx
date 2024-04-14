import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const DashBoard = () => {
  return (
    <div className="px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[2.5rem]">DashBoard</h1>

        <div className="flex gap-6 item-center">
          <div className="flex relative">
            <input type="search" className="rounded-md" />
            <FaSearch className="text-red-500 absolute" />
          </div>

          <IoIosNotifications className="text-green text-8" />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
