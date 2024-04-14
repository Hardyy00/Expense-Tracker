/* eslint-disable react/prop-types */
import Card from "../../UI/Card";

const MainContent = () => {
  return (
    <div className="w-full h-full mt-8 flex flex-col gap-[4rem]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[2rem] w-[50%]">
          <Card className="flex flex-col gap-[1rem]">
            <h2 className="heading">Overview</h2>

            <div className="flex items-center justify-between w-full">
              <Item amount={200} title="Remaining Amount" />
              <Item amount={400} title={"Earned"} />
              <Item amount={200} title={"Spent"} />
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

const Item = ({ amount, title }) => {
  return (
    <div className="text-center">
      <h3>${amount}</h3>
      <p className="text-[#384776]">{title}</p>
    </div>
  );
};

export default MainContent;
