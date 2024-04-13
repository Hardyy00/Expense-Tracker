import Card from "../../UI/Card";

const MainContent = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-center">
        <div className="flex flex-col gap-[3rem]">
          <Card>
            <p>Hii</p>
          </Card>
          <Card>
            <p>Hii</p>{" "}
          </Card>
        </div>

        <Card> Hii </Card>
      </div>
    </div>
  );
};

export default MainContent;
