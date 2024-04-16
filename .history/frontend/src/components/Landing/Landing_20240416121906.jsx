import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { BsGraphUpArrow } from "react-icons/bs";
import {
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";

const Landing = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isLogined, setIsLogined] = useState(false);

  const isPresent = useSelector((state) => state !== null);

  useEffect(() => {
    if (Cookies.get("authToken")) {
      setIsLogined(true);
    }
  }, []);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleGetStartedClick = () => {
    navigate("/register");
  };
  return (
    <div className="bg-[#101935] relative text-white w-full">
      <header className=" bg-[#0f131e] w-full z-30 sticky top-0 bg-blue shadow-md">
        <div className=" mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            <div className="mr-4">
              <Link to="/" className="block" aria-label="Expense Tracker">
                <h1 className="text-xl font-semibold flex items-center gap-1 text-black-600">
                  <BsGraphUpArrow className="text-2xl" />
                  Expense Tracker
                </h1>
              </Link>
            </div>

            <nav className="hidden md:flex md:grow justify-end">
              <ul className="flex items-center">
                <li>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full">
                    {isLogined ? (
                      <Link
                        to="/dashboard"
                        className="flex justify-center items-center gap-[10px]"
                      >
                        <IoIosLogIn className="text-[1.5rem]" />
                        My Account
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="flex justify-center items-center gap-[10px]"
                      >
                        <IoIosLogIn className="text-[1.5rem]" />
                        Login
                      </Link>
                    )}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="relative pt-20 pb-10 md:pt-32 md:pb-16">
            <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
              <h1 className="text-4xl font-semibold mb-4">
                Expense Tracker Landing Page
              </h1>
              <p className="text-lg text-gray-500 mb-8">
                Keep track of your expenses effortlessly with our intuitive
                expense tracker app. Manage your finances anytime, anywhere.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div>
                    <Link
                      to="/register"
                      className="btn-sm text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 ml-3 px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="max-w-6xl mx-auto px-0 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="text-4xl font-semibold mb-4">Features</h2>
              <p className="text-xl text-gray-400">
                With our intuitive Expense Tracker app, managing your finances
                has never been easier. Track your expenses, visualize your
                spending patterns, and take control of your financial future.
              </p>
            </div>

            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">
              <div className="relative flex flex-col items-center">
                <AiOutlineDollar className="w-16 h-16 mb-4 text-black-600" />
                <h4 className="h4 mb-2">Expense Tracking</h4>
                <p className="text-lg text-gray-400 text-center">
                  Easily track your expenses and see where your money is going
                  with our intuitive expense tracking feature.
                </p>
              </div>

              <div className="relative flex flex-col items-center">
                <BsGraphUp className="w-16 h-16 mb-4 text-black-600" />
                <h4 className="h4 mb-2">Financial Insights</h4>
                <p className="text-lg text-gray-400 text-center">
                  Gain valuable insights into your spending habits and financial
                  trends through interactive graphs and charts.
                </p>
              </div>

              <div className="relative flex flex-col items-center">
                <MdAccountBalanceWallet className="w-16 h-16 mb-4 text-black-600" />
                <h4 className="h4 mb-2">Budget Management</h4>
                <p className="text-lg text-gray-400 text-center">
                  Take control of your finances by setting budgets and receiving
                  alerts when you exceed your spending limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative bg-[#0f131e] py-10 px-8 md:py-16 md:px-12">
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Stay in the loop</h3>
              <p className="text-purple-200 text-lg">
                Join our newsletter to get top news before anyone else.
              </p>
            </div>
            <form className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  type="email"
                  className="w-full appearance-none bg-black-700 border border-black-500 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-black-400"
                  placeholder="Your best email…"
                />
                <Link
                  to="/subscribe"
                  className="btn-sm text-black bg-white hover:bg-red-700 ml-3 px-4 py-3"
                >
                  Subscribe
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-20 md:py-16 px-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="md:flex md:items-center md:justify-between">
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  to="/"
                  className="flex justify-center items-center text-white bg-black hover:text-gray-100 hover:bg-white rounded-full transition duration-150 ease-in-out p-2"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-6 h-6 fill-current" />
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  to="/"
                  className="flex justify-center items-center text-white bg-black hover:text-gray-100 hover:bg-white rounded-full transition duration-150 ease-in-out p-2"
                  aria-label="Github"
                >
                  <FaGithub className="w-6 h-6 fill-current" />
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  to="/"
                  className="flex justify-center items-center text-white bg-black hover:text-gray-100 hover:bg-white rounded-full transition duration-150 ease-in-out p-2"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6 fill-current" />
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  to="/"
                  className="flex justify-center items-center text-white bg-black hover:text-gray-100 hover:bg-white rounded-full transition duration-150 ease-in-out p-2"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6 fill-current" />
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  to="/"
                  className="flex justify-center items-center text-white bg-black hover:text-gray-100 hover:bg-white rounded-full transition duration-150 ease-in-out p-2"
                  aria-label="Linkedin"
                >
                  <FaLinkedin className="w-6 h-6 fill-current" />
                </Link>
              </li>
            </ul>

            <div className="text-white text-sm mr-4">
              &copy; Expense Tracker. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
