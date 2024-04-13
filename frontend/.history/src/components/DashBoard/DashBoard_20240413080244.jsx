import { IoIosNotifications } from "react-icons/io";
const DashBoard = () => {
  return (
    <div className="px-8 py-4">
      <div className="flex items-center">
        <h1 className="text-[2.5rem]">DashBoard</h1>

        <div>
          <IoIosNotifications />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
