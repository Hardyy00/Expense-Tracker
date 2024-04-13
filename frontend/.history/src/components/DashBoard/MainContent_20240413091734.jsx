import Card from "../../UI/Card";

const MainContent = () => {
  return (
    <div className="w-full h-full mt-8 flex flex-col gap-[4rem]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[2rem] w-[55%]">
          <Card>
            <h2 className="heading">Overview</h2>
          </Card>
          <Card>
            <h2 className="heading"></h2>
          </Card>
        </div>

        <Card className="w-[40%]">
          <h2 className="heading"></h2>
        </Card>
      </div>

      <div className="flex w-full justify-between">
        <Card className="w-[55%]">
          <h2 className="heading"></h2>
        </Card>

        <Card className="w-[40%]">
          <h2 className="heading"></h2>
        </Card>
      </div>
    </div>
  );
};

// const Item = ({ amount, title }) => {};

export default MainContent;
