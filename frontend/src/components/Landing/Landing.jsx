import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg-removebg-preview.png";

const Landing = () => {
  const [menuActive, setMenuActive] = useState(false);
  let navigate = useNavigate();
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleGetStartedClick = () => {
    navigate("/");
  };

  return (
    <div className="landing-page  bg-repeat bg-black h-[100vh] relative">
      <header className="py-4 px-6 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-xl font-semibold">Expense Tracker</h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`md:flex md:items-center md:space-x-4 ${
            menuActive ? "block" : "hidden"
          }`}
        >
          <ul className="md:flex md:space-x-4 justify-center">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full">
              Login
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full">
              Signup
            </button>
          </div>
        </nav>
      </header>

      <section className="hero px-20 py-16 flex items-center justify-between">
        <div className="max-w-lg px-10 py-10">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Take Control of Your Finances
          </h2>
          <p className="text-lg text-white  mb-8">
            Track your expenses, set budgets, and achieve your financial goals
            with ease.
          </p>
          <button
            onClick={handleGetStartedClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-3 rounded-full"
          >
            Get Started
          </button>
        </div>
        <div
          className="bg-cover bg-right w-1/2 h-full"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </section>

      
      <footer className="text-white absolute bottom-10 w-full">
  <div className="container mx-auto px-20">
    <div className="flex justify-center items-center">
      <p className="text-sm">
        &copy; 2024 Expense Tracker. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Landing;
