import { Button, Input } from "@mui/material";
import { useSelector } from "react-redux";

const LimitTaker = ({ label }) => {
  const value = useSelector((state) => {
    if (label === "Spend Limit") {
      return state.spentLimit;
    } else if (label === "Loan From Limit") {
      return state.loanedFromLimit;
    } else {
      return state.loanedToLimit;
    }
  });
  const submitHandler = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const obj = Object.fromEntries(form);

    console.log(obj);
  };
  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4">
      <div className="flex  items-center justify-center gap-4">
        <label className="text-white text-[1.3rem]">Limit</label>
        <Input defaultValue={value} className="text-white" />
      </div>
      <Button variant="contained" className="self-center">
        Set Limit
      </Button>
    </form>
  );
};

export default LimitTaker;
