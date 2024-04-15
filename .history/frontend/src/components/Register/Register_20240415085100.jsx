import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiConnector } from "../../Operations/apiConnector";
import { message } from "antd";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    name: "",
    age: "",
    gender: "",
    profilePhoto: null,
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
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <div className="bg-[#101935] text-white w-full h-full">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="text-4xl">Register Yourself</h1>
            </div>

            <div className="max-w-sm mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input w-full text-gray-300 bg-transparent bborder-gray-400 border-b-2 focus:border-b-green-400 outline-none focus:outline-none"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Enter Password<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-input w-full text-gray-300 bg-transparent border-gray-400 border-b-2 focus:border-b-green-400 outline-none focus:outline-none"
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="age"
                    >
                      Enter Age <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="form-input w-full text-gray-300 bg-transparent border-gray-400 border-b-2 focus:border-b-green-400 outline-none focus:outline-none"
                      placeholder="Enter Age"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="gender"
                    >
                      Gender <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="form-input w-full text-gray bg-transparent border-gray-400 border-b-2 focus:border-b-green-400 outline-none focus:outline-none"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="profession"
                    >
                      Profession <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      className="form-input w-full text-gray-300 bg-transparent border-gray-400 border-b-2 focus:border-b-green-400 outline-none focus:outline-none"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="annualIncome"
                    >
                      Annual Income <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      id="annualIncome"
                      name="annualIncome"
                      value={formData.annualIncome}
                      onChange={handleChange}
                      className="form-input w-full text-gray-300 bg-transparent border-gray-400 border-b-2 focus:border-b-green-400 outline-none focus:outline-none"
                      placeholder="Enter Annual Income"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="profilePhoto"
                    >
                      Profile Photo <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="file"
                      id="profilePhoto"
                      name="profilePhoto"
                      onChange={handleChangeImage}
                      className="form-input w-full text-gray-300 bg-transparent border-gray-400 border-b-2 focus:border-b-green-400 outline-none focus:outline-none"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Enter Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input w-full text-gray-300 bg-transparent border-gray-400 border-b-2 focus:border-b-green-400 outline-none focus:outline-none"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="phone"
                    >
                      Enter Mobile Number{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input w-full text-gray-300 bg-transparent border-gray-400 border-b-2 focus:border-b-green-400 outline-none focus:outline-none"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 w-full py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
