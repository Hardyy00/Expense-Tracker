import { Card } from "../../UI/Card";

const MainContent = () => {
  return (
    <div className="w-full h-full">
      <div className="flex">
        <div className="flex flex-col">
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
