import React from "react";
import CustomButton from "./CustomButton";

const OfferCard = ({ title, description, image }) => {
  return (
    <div className="relative flex-col justify-between bg-gray-900 w-1/4 rounded-lg overflow-hidden shadow-md  border-none p-3 transform transition duration-300 hover:-translate-y-2 hover:shadow-yellow-400 hover-border-3 drop-shadow-2xl shadow-gray-400">
      <img
        className="border-1 border-none rounded-2xl w-full object-contain"
        src={image}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent  to-black opacity-50"></div>
     
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
