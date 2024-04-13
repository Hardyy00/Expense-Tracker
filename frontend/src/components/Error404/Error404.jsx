import React from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
const Error404 = () => {
  return (
    <div className="error w-full h-[100vh] flex">
      <div
        className="left w-[50%] h-[100vh]"
        style={{
          backgroundImage: `url("https://assets.materialup.com/uploads/c2b5ecb4-ccae-4d53-b0fb-117058776fb4/preview.png")`,
        }}
      ></div>
      <div className="right w-[50%] h-[100vh] bg-orange-200 flex flex-col justify-center items-center">
        <img
          src="https://demos.codexcoder.com/themeforest/html/ollya/assets/images/404.png"
          alt=""
          srcset=""
        />
        <button className="text-[2rem] mt-[3rem] bg-blue-900 text-white p-2 rounded-md font-thin flex hover:text-white hover:bg-pink-600">
          <Link to="/" className="flex justify-center items-center gap-2">
            <RiArrowGoBackFill />
            Back to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Error404;
