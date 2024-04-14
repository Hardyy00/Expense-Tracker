import { Input } from "@mui/material";
import { useSelector } from "react-redux";

const LimitTaker = ({ label }) => {
  const value = useSelector((state) => {
    if (label === "Spent Limit") {
      return state.spentLimit;
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
      <Input placeholder="" />
    </form>
  );
};

export default LimitTaker;
