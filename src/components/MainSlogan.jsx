import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import GetStarted from "./GetStarted";
import React from "react";

function MainSlogan() {
  return (
    <>
      <div className="space-y-14 items-center mt-15   ">
        <div className=" items-center mt-40 mx-20 w-1/2">
          <h1 className="font-bold text-white text-6xl">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text font-extrabold">
              ज्ञानHub:
            </span>
            Your AI based Learning Platform
          </h1>
          <p className="text-2xl text-gray-300 mt-7 ">
            Empowering Education Through AI: Transformative Learning, Unmatched
            Insights.
          </p>
          <div className="flex space-x-3 my-6 ">
            
            <Link to="/getStarted">
              <CustomButton ButtonName="Get Started"></CustomButton>
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default MainSlogan;
