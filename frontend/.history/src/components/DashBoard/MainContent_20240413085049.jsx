import { Card } from "@mui/material";

const MainContent = () => {
  return (
    <div className="w-full h-full">
      <div>
        <div>
          <Card>
            <p>Hii</p>
          </Card>
          <Card>
            <p>Hii</p>{" "}
          </Card>
        </div>

        <Card > Hii <Card/>
      </div>
    </div>
  );
};

export default MainContent;
