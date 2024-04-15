import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { apiConnector } from "../../Operations/apiConnector";
import Cookies from "js-cookie";

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
      const res = await apiConnector(
        "post",
        "http://localhost:8000/login",
        formData
      );
      if (res.data.success) {
        Cookies.set("authToken", res.data.token);
        Cookies.set("loginedUser", res.data.user._id);
        message.success("Logged in Successfully");
        navigate("/dashboard");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  return (
    <div className="bg-[#101935] text-white w-full h-full">
      <section>
        <div className="mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="text-4xl font-semibold">Welcome Back</h1>
            </div>
            <div className="max-w-sm mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-lg font-medium mb-1"
                      htmlFor="email"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="form-input w-full text-gray-300 bg-transparent border-b-2 border-gray-400 focus:border-b-white"
                      placeholder="@hereshivang"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-lg font-medium mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-input w-full text-gray-300 bg-transparent border-b-2 border-gray-400 focus:border-white"
                      placeholder="Password (at least 10 characters)"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 w-full py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
              <div className="text-gray-300 text-center mt-6">
                Don’t you have an account?{" "}
                <Link
                  to="/register"
                  className="text-red-600 hover:text-white transition duration-150 ease-in-out"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
