/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
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
  const [form, setForm] = useState({ title: "", amount: 0 });
  const [subCategory, setSubCategory] = useState("");
  const [type, setType] = useState("");

  let expenses = useSelector((state) => state.expenses);
  const length = expenses.length;
  expenses = expenses.slice(0, 5);

  console.log(expenses);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = { ...form, category, subCategory, type };

    setForm({ title: "", amount: 0 });
    setCategory("");
    setSubCategory("");
    setType("");

    dispatch(userActions.addExpense(data));
  };
  return (
    <div className="w-full h-full mt-8 flex flex-col gap-[4rem] ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[2rem] w-[55%]">
          <Card className="flex flex-col gap-[1.3rem]">
            <h2 className="heading">Overview</h2>

            <div className="flex items-center justify-between w-full">
              <Item
                amount={200}
                title="Remaining Amount"
                className="text-blue-400"
              />
              <Item amount={400} title={"Earned"} className="text-green-400" />
              <Item amount={200} title={"Spent"} className="text-red-500" />
              <Item
                amount={100}
                title={"Loaned to Friend"}
                className="text-yellow-400"
              />
              <Item
                amount={100}
                title={"Loaned from Friend"}
                className="text-green-400"
              />
            </div>
          </Card>
          <Card className="p-[8rem]">
            <h2 className="heading">Expense Statistics</h2>
          </Card>
        </div>

        {/* all  expenses will be shown here */}
        <Card className="w-[40%]">
          <h2 className="heading">Activities</h2>

          <div className="p-4 flex flex-col items-center justify-center gap-6">
            {expenses.map((item, index) => (
              <ExpenseItem expense={item} key={index} />
            ))}
          </div>

          {<p className="float-right mr-4">Show More</p>}
        </Card>
      </div>

      <div className="flex w-full justify-between">
        <Card className="w-[55%] flex flex-col gap-4">
          <div className="flex gap-4 w-full items-center justify-between">
            {" "}
            <h2 className="heading">Add Expense</h2>
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
                <MenuItem value={"Loaned from friend"}>
                  Loaned from Friend
                </MenuItem>
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
            </div>
          </div>
        </Card>

        <Card className="w-[40%]">
          <h2 className="heading">Friends</h2>
        </Card>
      </div>
    </div>
  );
};

const Item = ({ amount, title, className = "" }) => {
  return (
    <div className="text-center">
      <h3 className={`text-[1.5rem] font-light text-gray-300 ${className}`}>
        ${amount}
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

      <div className="w-[7rem]">
        <h2 className="opacity-85">
          {expense.type === "Earned" ? expense.type : expense.subCategory}
        </h2>
        <p className="opacity-45">{expense.title}</p>
      </div>

      <p className="w-[5rem] text-center">{expense.type}</p>
      <p>${expense.amount}</p>
    </div>
  );
};

export default MainContent;
