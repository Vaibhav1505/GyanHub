import React from "react";
import backgroundImage from "../assets/images/wp9240118.jpg";
import AboutUs from "./About";
import HeaderSection from "./Header";
import MainSlogan from "./MainSlogan";
import Offering from "./Offering";
import  "../App.css";

function LandingPage() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <HeaderSection />
        <MainSlogan />
      </div>

      <Offering />
      <AboutUs />
    </>
  );
}

export default LandingPage;
