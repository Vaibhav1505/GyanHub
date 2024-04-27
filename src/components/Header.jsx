import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
function HeaderSection() {
  return (
    <>
      <nav className="custom-nav font-semibold bg-transparent text-black  justify-evenly py-3 px-5">
        <div className="flex justify-between  items-center  ">
          <div className="text-white font-bold text-2xl space-x-1">
            <Link to="/">
              {" "}
              <span className="font-bold">ज्ञान</span>
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text font-bold  ">
                Hub
              </span>
            </Link>
          </div>
          <div className="flex space-x-8 text-xl list-none items-center  text-gray-600  px-5 py-2 ">
            <li className="hover:text-white delay-50 ease-in-out duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white delay-50 ease-in-out duration-200">
              <Link to="/features">Features</Link>
            </li>

            <li className="hover:text-white delay-50 ease-in-out duration-200">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-white delay-50 ease-in-out duration-200">
              <a href="#">Team</a>
            </li>
          </div>
          <div className="flex space-x-2">
            <CustomButton
              ButtonName="Login"
              handleOnClick={console.log("hello")}
            ></CustomButton>
            <CustomButton
              ButtonName="Sign Up"
              handleOnClick={console.log("plaese sgn up")}
            ></CustomButton>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderSection;
