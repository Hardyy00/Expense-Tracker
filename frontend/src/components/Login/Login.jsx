import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { apiConnector } from "../../Operations/apiConnector";
import { IoChevronBackCircle } from "react-icons/io5";
import Cookies from 'js-cookie';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   console.log("login ka form data",formData);

      const res = await apiConnector(
        "post",
        "http://localhost:8000/login",
        formData
      );
      if (res.data.success) {
        // console.log("Inside frontend: ", res.data.token);
        // document.cookie = `authToken=${res.data.token}; path=/;`;
        // localStorage.setItem("authToken", res.data.token);
          // document.cookie = `loginedUser=${res.data.user._id}; path=/;`;
          Cookies.set('authToken', res.data.token);
          Cookies.set('loginedUser', res.data.user._id);
        message.success("Logged in Successfully");
        navigate(`/dashboard`);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  return (
    <div className="login-wrapper w-full h-[100vh] flex bg-gradient-to-r from-yellow-800 to-white">
      <div className="container  sm:w-[50%] h-[100vh] flex flex-col justify-center z-20 w-0">
        <h1 className="sm:text-[4rem] text-[2rem] font-bold text-center my-8 bg-gradient-to-r from-white-500 to-pink-800 text-transparent bg-clip-text ">
          Welcome to Expense Tracker
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-max mx-auto p-[6rem] sm:text-[2rem] text-[1rem] "
        >
          <div className="mb-4 flex">
            <label
              htmlFor="username"
              className="block mb-1 font-thin text-slate-200"
            >
              Username*
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="sm:w-full px-3 py-2  border-pink-200 bg-transparent border-b-2 text-grey-600  outline-none"
              required
            />
          </div>
          <div className="mb-[5rem] flex">
            <label
              htmlFor="password"
              className="block mb-1 font-thin mt-2 text-white"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2  border-pink-200 bg-transparent border-b-2  outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <button className=" opacity-[0.7] w-full bg-black text-white py-2 px-4 rounded-full hover:bg-white hover:text-red-800 mt-[4rem]">
            <Link to="/register">Signup</Link>
          </button>
        </form>
      </div>

      <Link
        to="/"
        className="flex ml-[57%] absolute mt-[4rem] text-[1.4rem] text-white"
      >
        <IoChevronBackCircle className="text-[5rem] z-20" />
      </Link>
      <img
        src="https://play-lh.googleusercontent.com/iahXn0KlLte_rQg9wdgwA1M1ohWwQ15AlbD7cINrJMCdPXEZ59mlXS3YzZRsNkGl1sg"
        alt=""
        className="sm:w-[52%]  w-full rounded-l-[30%] z-10 w"
      />
    </div>
  );
};

export default Login;
