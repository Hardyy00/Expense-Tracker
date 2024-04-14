import Card from "../../UI/Card";

const MainContent = () => {
  return (
    <div className="w-full h-full mt-8 flex flex-col gap-[4rem]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[3rem] w-[55%]">
          <Card>
            <p>Hii</p>
          </Card>
          <Card>
            <p>Hii</p>{" "}
          </Card>
        </div>

        <Card className="w-[40%]"> Hii </Card>
      </div>

      <div>
        <Card>Hii</Card>

        <Card>Hii</Card>
      </div>
    </div>
  );
};

export default MainContent;
