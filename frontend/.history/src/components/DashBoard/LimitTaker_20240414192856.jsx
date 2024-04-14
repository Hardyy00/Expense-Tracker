import { Button, Input } from "@mui/material";
import { useSelector } from "react-redux";

const LimitTaker = ({ label }) => {
  const value = useSelector((state) => {
    if (label === "Spending Limit") {
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
    <form onSubmit={submitHandler} className="flex flex-col gap-4 items-center">
      <label className="text-white text-[1.1rem] block text-yellow-500">
        {label}
      </label>
      <Input
        defaultValue={value}
        style={{ borderBottom: "1px solid white" }}
        sx={{ input: { color: "white", paddingInline: "1rem" } }}
      />

      <Button
        variant="contained"
        className="self-center"
        sx={{ backgroundColor: "green" }}
      >
        Set Limit
      </Button>
    </form>
  );
};

export default LimitTaker;
