import React from "react";
import CustomButton from "./CustomButton";

const OfferCard = ({ title, description, image }) => {
  return (
    <div className=" flex flex-row items-center justify-evenly space-x-3  bg-gray-900  rounded-lg  shadow-md  border-none p-2 w-3/4  transform transition duration-300 hover:translate-x-2 hover:shadow-yellow-400 hover-border-3 drop-shadow-2xl shadow-gray-400">
      <img
        className="border-1 border-none rounded-3xl w-32 object-contain"
        src={image}
        alt=""
      />

      <div className="relative z-10">
        <h1 className="text-2xl text-white font-bold my-3">{title}</h1>
        <p className="text-gray-300 mb-4">{description}</p>
        {/* <div className="font-semi  ">
          <CustomButton ButtonName="Explore"></CustomButton>
        </div> */}
      </div>
    </div>
  );
};

export default OfferCard;