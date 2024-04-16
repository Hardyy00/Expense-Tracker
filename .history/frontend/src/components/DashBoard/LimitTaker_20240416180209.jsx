import { Button, Input } from "@mui/material";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLimit, userActions } from "../../store/store";

// eslint-disable-next-line react/prop-types
const LimitTaker = ({ label }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const id = useSelector((state) => state._id);

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

    let limitType = "";

    if (label === "Spending Limit") {
      limitType = "spent";
    } else if (label === "Loan From Limit") {
      limitType = "loaned from";
    } else {
      limitType = "loaned to";
    }

    dispatch(setLimit(inputRef.current.value, limitType));
  };
  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4 items-center">
      <label className=" text-[1.1rem] block text-yellow-500 font-bold">
        {label}
      </label>
      <Input
        defaultValue={value}
        style={{ borderBottom: "1px solid white" }}
        sx={{ input: { color: "white", paddingInline: "1rem" } }}
        inputRef={inputRef}
      />

      <Button
        variant="contained"
        className="self-center"
        sx={{ backgroundColor: "green" }}
        type="submit"
      >
        Set Limit
      </Button>
    </form>
  );
};

export default LimitTaker;
