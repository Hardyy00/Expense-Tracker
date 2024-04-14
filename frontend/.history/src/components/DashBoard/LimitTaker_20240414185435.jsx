import { Input } from "@mui/material";
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
    <form onSubmit={submitHandler}>
      <Input defaultValue={value} />
    </form>
  );
};

export default LimitTaker;
