/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import Card from "../../UI/Card";
import { useState } from "react";
import Input from "@mui/material/Input";
import { FaHouseChimney } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { IoIosWater } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { SiTemporal } from "react-icons/si";
import { LuSofa } from "react-icons/lu";
import { GiCommercialAirplane } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/store";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Progress } from "rsuite";

const ariaLabel = { "aria-label": "description" };

const map = {
  "recurring bill": [
    "Rent",
    "Electric Bill",
    "Water Bill",
    "Mobile Recharge",
    "Car Petrol",
  ],

  "miscellaneous bill": ["Shopping", "Movie", "Food", "Furniture", "Travel"],
};

const iconsMap = {
  Rent: <FaHouseChimney className="w-full h-full" />,
  "Electric Bill": <MdElectricBolt className="w-full h-full" />,
  "Water Bill": <IoIosWater className="w-full h-full" />,
  "Mobile Recharge": <FaMobileAlt className="w-full h-full" />,
  "Car Petrol": <FaCar className="w-full h-full" />,
  Shopping: <FaShoppingBag className="w-full h-full" />,
  Movie: <BiSolidCameraMovie className="w-full h-full" />,
  Food: <IoFastFoodOutline className="w-full h-full" />,
  Furniture: <LuSofa className="w-full h-full" />,
  Travel: <GiCommercialAirplane className="w-full h-full" />,
  Default: <SiTemporal className="w-full h-full" />,
};

const MainContent = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [form, setForm] = useState({
    title: "",
    amount: 0,
    date: dayjs(""),
  });
  const [subCategory, setSubCategory] = useState("");
  const [type, setType] = useState("");

  let spent = 0,
    earned = 0,
    loanedTo = 0,
    loanedFrom = 0,
    gaveBack = 0,
    gotFrom = 0;

  let spentCount = 0,
    earnedCount = 0,
    loanedToCount = 0,
    loanedFromCount = 0,
    gaveBackCount = 0,
    gotFromCount = 0;

  let expenses = useSelector((state) => state.expenses);
  const length = expenses.length;

  const friends = expenses.filter((item) => item.friendName !== undefined);

  const { spentLimit, loanedFromLimit, loanedToLimit } = useSelector(
    (state) => {
      return {
        spentLimit: state.spentLimit,
        loanedFromLimit: state.loanedFromLimit,
        loanedToLimit: state.loanedToLimit,
      };
    }
  );

  for (const item of expenses) {
    if (item.type === "Spent") {
      spent += item.amount;
      spentCount++;
    } else if (item.type === "Earned") {
      earned += item.amount;
      earnedCount++;
    } else if (item.type === "Loaned to Friend") {
      loanedTo += item.amount;
      loanedToCount++;
    } else if (item.type === "Loaned from Friend") {
      loanedFrom += item.amount;
      loanedFromCount++;
    } else if (item.type === "Got Back From") {
      gotFrom += item.amount;
      gotFromCount++;
    } else {
      gaveBack += item.amount;
      gaveBackCount++;
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      ...form,
      category,
      subCategory,
      type,
    };

    if (
      type === "Loaned to Friend" ||
      type === "Loaned from Friend" ||
      type === "Got Back From" ||
      type === "Gave Back To"
    ) {
      data.friendName = category;
      delete data.category;
    }

    setForm({ title: "", amount: 0 });
    setCategory("");
    setSubCategory("");
    setType("");

    dispatch(userActions.addExpense(data));
  };
  return (
    <div className="w-full h-full mt-8 flex flex-col gap-[4rem] ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[2rem] ">
          <Card className="flex flex-col gap-[1.3rem]">
            <h2 className="heading">Overview</h2>

            <div className="flex items-start  w-full gap-3">
              <Item
                amount={
                  earned - spent + loanedFrom - loanedTo + gotFrom - gaveBack
                }
                title="Remaining Amount"
                className="text-blue-400"
              />
              <Item
                amount={earned}
                title={"Earned"}
                className="text-green-400"
              />
              <Item amount={spent} title={"Spent"} className="text-red-500" />
              <Item
                amount={loanedTo}
                title={"Loaned to Friend"}
                className="text-yellow-400"
              />
              <Item
                amount={loanedFrom}
                title={"Loaned from Friend"}
                className="text-green-400"
              />

              <Item
                amount={gaveBack}
                title={"Gave Back To"}
                className="text-red-400"
              />

              <Item
                amount={gotFrom}
                title={"Got Back From"}
                className="text-green-400"
              />
            </div>
          </Card>
          <Card className="">
            <h2 className="heading">Expense Statistics</h2>

            {spentCount +
              earnedCount +
              loanedToCount +
              loanedFromCount +
              gaveBackCount +
              gotFromCount ==
              0 && (
              <h2 className="w-full text-center p-8">
                No Expenses to display Chart
              </h2>
            )}

            <div className="flex flex-col w-full gap-8 items-center justify-center">
              {spentCount +
                earnedCount +
                loanedToCount +
                loanedFromCount +
                gaveBackCount +
                gotFromCount >
                0 && (
                <PieChart
                  colors={["red", "green", "pink", "yellow", "black", "white"]}
                  series={[
                    {
                      data: [
                        { id: 0, value: spentCount, label: "Spent" },
                        { id: 1, value: earnedCount, label: "Earned" },
                        { id: 2, value: loanedFromCount, label: "Loaned From" },
                        { id: 3, value: loanedToCount, label: "Loaned To" },
                        { id: 4, value: gaveBackCount, label: "Gave Back" },
                        { id: 5, value: gotFromCount, label: "Got Back" },
                      ],
                    },
                  ]}
                  sx={{
                    [`&.${pieArcLabelClasses.root}`]: {
                      fill: "white",
                      fontWeight: "bold",
                    },
                  }}
                  width={400}
                  height={200}
                />
              )}

              <h2 className="self-start text-[1.2rem] text-violet-500 underline">
                Limit Tracker
              </h2>

              <div className="flex w-full justify-between">
                {/* {
                  <ProgressItem
                    amount={spent}
                    limit={1000}
                    title={"Spent"}
                    key={"p1"}
                  />
                } */}

                {spentLimit > 0 && (
                  <div className="flex flex-col items-center gap-4">
                    <Progress.Circle
                      percent={((spent * 100.0) / spentLimit).toFixed(2)}
                      status={
                        ((spent * 100.0) / spentLimit).toFixed(2) < 100
                          ? "active"
                          : "fail"
                      }
                      className="w-[8rem] text-white"
                    />

                    <h2 className="text-[1.2rem]">{"Spent"}</h2>
                  </div>
                )}

                {loanedFromLimit > 0 && (
                  <div className="flex flex-col items-center gap-4">
                    <Progress.Circle
                      percent={((loanedFrom * 100.0) / loanedFromLimit).toFixed(
                        2
                      )}
                      status={
                        ((loanedFrom * 100.0) / loanedFromLimit).toFixed(2) <
                        100
                          ? "active"
                          : "fail"
                      }
                      className="w-[8rem] text-white"
                    />

                    <h2 className="text-[1.2rem]">Loaned From</h2>
                  </div>
                )}

                {loanedToLimit > 0 && (
                  <div className="flex flex-col items-center gap-4">
                    <Progress.Circle
                      percent={((loanedTo * 100.0) / loanedToLimit).toFixed(2)}
                      status={
                        ((loanedTo * 100.0) / loanedToLimit).toFixed(2) < 100
                          ? "active"
                          : "fail"
                      }
                      className="w-[8rem] text-white"
                    />

                    <h2 className="text-[1.2rem]">Loaned To</h2>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* all  expenses will be shown here */}
        <Card className="w-[38%] overflow-auto">
          <h2 className="heading">Activities</h2>

          {length === 0 && (
            <p className="w-full h-[80%] flex items-center justify-center text-[1.4rem]">
              No Expenses
            </p>
          )}
          {length > 0 && (
            <div className="py-4 px-2 flex flex-col items-center justify-center gap-6">
              {expenses.slice(0, 5).map((item, index) => (
                <ExpenseItem expense={item} key={index} />
              ))}
            </div>
          )}

          {/* {length > 5 && (
            <button className="float-right mr-6 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
              Show More
            </button>
          )} */}
        </Card>
      </div>

      <div className="flex w-full justify-between">
        <Card className="w-[60%] flex flex-col gap-4">
          <div className="flex gap-4 w-full items-center justify-between">
            {" "}
            <h2 className="heading">Add Expense</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                value={form.date}
                onChange={(newValue) => {
                  setForm((pre) => {
                    return { ...pre, data: newValue };
                  });
                }}
                sx={{
                  input: { color: "white" },
                  svg: { color: "white" },
                  label: { color: "red" },
                }}
              />
            </LocalizationProvider>
            <FormControl className="w-[40%]">
              <InputLabel
                id="demo-simple-select-label"
                style={{ color: "white" }}
              >
                Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Type"
                onChange={(event) => {
                  setType(event.target.value);
                }}
                style={{ color: "moccasin" }}
              >
                <MenuItem value={"Earned"}>Earned</MenuItem>
                <MenuItem value={"Spent"}>Spent</MenuItem>
                <MenuItem value={"Loaned to Friend"}>Loaned to Friend</MenuItem>
                <MenuItem value={"Loaned from Friend"}>
                  Loaned from Friend
                </MenuItem>
                <MenuItem value={"Gave Back To"}>Gave Back To</MenuItem>
                <MenuItem value={"Got Back From"}>Got Back From</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="flex gap-4">
            <div className="w-[40%]">
              <form
                action=""
                onSubmit={submitHandler}
                className="flex flex-col gap-4  justify-center"
              >
                <Input
                  placeholder="Title"
                  className="text-white"
                  inputProps={ariaLabel}
                  style={{ color: "white", borderBottom: "1px solid white" }}
                  value={form.title}
                  onChange={(event) =>
                    setForm((pre) => {
                      return { ...pre, title: event.target.value };
                    })
                  }
                />
                <Input
                  placeholder="Amount"
                  type="number"
                  style={{ color: "white", borderBottom: "1px solid white" }}
                  value={form.amount === 0 ? "" : form.amount}
                  onChange={(event) => {
                    setForm((pre) => {
                      return { ...pre, amount: +event.target.value };
                    });
                  }}
                />

                <Button variant="outlined" className="self-start" type="submit">
                  Submit
                </Button>
              </form>
            </div>

            <div className="flex flex-col w-[50%] gap-4">
              {type === "Spent" && (
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "white" }}
                  >
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={(event) => {
                      setCategory(event.target.value);
                    }}
                    style={{ color: "aqua" }}
                  >
                    <MenuItem value={"One Time Purchase"}>
                      One Time Purchase
                    </MenuItem>
                    <MenuItem value={"Recurring Bill"}>Recurring Bill</MenuItem>
                    <MenuItem value={"Miscellaneous Bill"}>
                      Miscellaneous Bill
                    </MenuItem>
                  </Select>
                </FormControl>
              )}

              {/* input for miscellaneous bill as well as recurring bill */}

              {(category.toLowerCase() === "recurring bill" ||
                category.toLowerCase() === "miscellaneous bill") && (
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "white" }}
                  >
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={subCategory}
                    label="SubType"
                    onChange={(event) => setSubCategory(event.target.value)}
                    style={{ color: "violet" }}
                  >
                    {map[category.toLowerCase()]?.map((item, index) => (
                      <MenuItem value={item} key={index}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              {/* input for one time bill */}
              {category === "One Time Purchase" && (
                <Input
                  placeholder="Subcategory"
                  style={{
                    color: "violet",
                    borderBottom: "1px solid white",
                    paddingInline: "1rem",
                  }}
                  value={subCategory}
                  onChange={(event) => setSubCategory(event.target.value)}
                />
              )}

              {(type === "Loaned to Friend" ||
                type === "Loaned from Friend" ||
                type === "Gave Back To" ||
                type === "Got Back From") && (
                <Input
                  placeholder="Friend Name"
                  style={{
                    color: "violet",
                    borderBottom: "1px solid white",
                    paddingInline: "1rem",
                  }}
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                />
              )}
            </div>
          </div>
        </Card>

        <Card className="w-[35%] rounded-2xl">
          <h2 className="heading">Friends</h2>

          <div className="flex flex-col">
            {friends.length == 0 && (
              <h2 className="text-center w-full py-12">No Friends</h2>
            )}
            {friends.slice(0, 3).map((item, index) => (
              <Friend key={index} expense={item} />
            ))}
          </div>

          {friends.length > 3 && (
            <button className="float-right mr-6 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
              Show More
            </button>
          )}
        </Card>
      </div>
    </div>
  );
};

const Item = ({ amount, title, className = "" }) => {
  return (
    <div className="text-center">
      <h3 className={`text-[1.5rem] font-light text-gray-300 ${className}`}>
        {amount < 0 && "- "} ${Math.abs(amount)}
      </h3>
      <p className="text-gray-400 text-[0.9rem]">{title}</p>
    </div>
  );
};

const ExpenseItem = ({ expense }) => {
  return (
    <div className="flex  w-full items-start gap-10 text-start">
      <div className="border p-2 rounded-full bg-[#101935] h-[2.6rem] w-[2.6rem]">
        {expense.type === "Spent" && iconsMap[expense.subCategory] !== undefined
          ? iconsMap[expense.subCategory]
          : iconsMap["Default"]}
      </div>

      <div className="w-[8rem]">
        <h2 className="opacity-85">
          {expense.type !== "Spent" ? expense.type : expense.subCategory}
        </h2>
        <p className="opacity-45">{expense.title}</p>
      </div>

      <p
        className={`w-[5rem] text-center ${
          (expense.type === "Spent" || expense.type === "Gave Back To") &&
          "text-red-500"
        } ${
          (expense.type === "Earned" ||
            expense.type === "Loaned from Friend" ||
            expense.type === "Got Back From") &&
          "text-green-500"
        } ${expense.type === "Loaned to Friend" && "text-yellow-500"}`}
      >
        {expense.type}
      </p>
      <p
        className={`${
          (expense.type === "Spent" || expense.type == "Gave Back To") &&
          "text-red-500"
        } ${
          (expense.type === "Earned" ||
            expense.type === "Loaned from Friend" ||
            expense.type === "Got Back From") &&
          "text-green-500"
        } ${
          expense.type === "Loaned to Friend" && "text-yellow-500"
        } text-[1.2rem]`}
      >
        ${expense.amount}
      </p>
    </div>
  );
};

const Friend = ({ expense }) => {
  // console.log(expense);
  return (
    <div className="flex items-center justify-between p-4">
      <h2 className="text-[1.2rem]">{expense.friendName}</h2>
      <p
        className={`${
          (expense.type === "Loaned to Friend" ||
            expense.type === "Gave Back To") &&
          "text-red-500"
        } ${
          (expense.type === "Loaned from Friend" ||
            expense.type === "Got Back From") &&
          "text-green-500"
        }  `}
      >
        {expense.type}
      </p>
      <p
        className={`${
          (expense.type === "Loaned to Friend" ||
            expense.type === "Gave Back To") &&
          "text-red-500"
        } ${
          (expense.type === "Loaned from Friend" ||
            expense.type === "Got Back From") &&
          "text-green-500"
        } text-[1.2rem] `}
      >
        ${expense.amount}
      </p>
    </div>
  );
};

export default MainContent;
