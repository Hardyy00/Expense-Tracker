/* eslint-disable react/prop-types */
import Card from "../../UI/Card";

const MainContent = () => {
  return (
    <div className="w-full h-full mt-8 flex flex-col gap-[4rem]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[2rem] w-[50%]">
          <Card className="flex flex-col gap-[1.3rem]">
            <h2 className="heading">Overview</h2>

            <div className="flex items-center justify-between w-full px-4">
              <Item amount={200} title="Remaining Amount" />
              <Item amount={400} title={"Earned"} className="text-green-400" />
              <Item amount={200} title={"Spent"} className="text-red-500" />
              <Item amount={100} title={"Loaned to Friend"} />
              <Item amount={100} title={"Loaned from Friend"} />
            </div>
          </Card>
          <Card>
            <h2 className="heading">Expense Statistics</h2>
          </Card>
        </div>

        <Card className="w-[45%]">
          <h2 className="heading">Activities</h2>
        </Card>
      </div>

      <div className="flex w-full justify-between">
        <Card className="w-[55%]">
          <h2 className="heading">Add Expense</h2>
        </Card>

        <Card className="w-[40%]">
          <h2 className="heading">Friends</h2>
        </Card>
      </div>
    </div>
  );
};

const Item = ({ amount, title, className = "" }) => {
  return (
    <div className="text-center w-[2rem]">
      <h3 className={`text-[1.5rem] font-light text-gray-300 ${className}`}>
        ${amount}
      </h3>
      <p className="text-gray-400 text-[0.9rem]">{title}</p>
    </div>
  );
};

export default MainContent;
