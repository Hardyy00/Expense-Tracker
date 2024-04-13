import React, { useState } from "react";
// import rightLogin from "../Login/login-right.png";
import { message } from "antd";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import { apiConnector } from "../../Operations/apiConnector";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // username: "",
    password: "",
    name: "",
    age: "",
    gender: "",
    profilePhoto: null, // Updated to allow file upload
    profession: "",
    email: "",
    phone: "",
    annualIncome: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeImage = (e) => {
    console.log("File selected:", e.target.files[0]);
    setFormData({
      ...formData,
      profilePhoto: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("profession", formData.profession);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("age", formData.age);
      formDataToSend.append("annualIncome", formData.annualIncome);
      formDataToSend.append("gender", formData.gender);
      formDataToSend.append("profilePhoto", formData.profilePhoto);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      console.log(formDataToSend);

      const res = await apiConnector(
        "post",
        "http://localhost:8000/register",
        formDataToSend
      );
      if (res.data.success) {
        message.success("Register Successful");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      message.error("Something Went Wrong");
    }
  };

  return (
    <div className="login-wrapper w-full h-screen flex bg-black ">
      
      <div className="container sm:w-[100%] h-full flex flex-col justify-center items-center z-20 w-0 overflow-y-scroll">
        <h1 className="sm:text-4xl text-2xl font-bold text-center my-8 text-white bg-clip-text sm:mt-[15rem]">
          Register
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mx-auto p-8 sm:text-lg text-base bg-white rounded-md shadow-lg"
          encType="multipart/form-data" // Set enctype for file upload
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-1 font-thin text-black-bold"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 bg-black-100 text-gray-800 rounded-md outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 font-thin text-gray-800"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-md outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block mb-1 font-thin text-gray-800">
              Age*
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-md outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block mb-1 font-thin text-gray-800"
            >
              Gender*
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-md outline-none"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="profession"
              className="block mb-1 font-thin text-gray-800"
            >
              Profession*
            </label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-md outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="annualIncome"
              className="block mb-1 font-thin text-gray-800"
            >
              Annual Income*
            </label>
            <input
              type="number"
              id="annualIncome"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-md outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="profilePhoto"
              className="block mb-1 font-thin text-gray-800"
            >
              Profile Photo
            </label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              onChange={handleChangeImage}
              className="w-full px-3 py-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-md outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 font-thin text-gray-800"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-md outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-1 font-thin text-gray-800"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 bg-gray-100 text-black-800 rounded-md outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4"
          >Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
