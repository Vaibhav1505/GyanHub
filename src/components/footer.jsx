import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="footer-options flex">
        <div className="text-white font-bold text-xl space-x-1">
          <span className="font-bold">ज्ञान</span>
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text font-bold  ">
            Hub
          </span>
          <h1>Be like a ज्ञानी</h1>
        </div>
        <div className="text-white">
          <ul>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>SUPPORT</li>
          </ul>
        </div>
      </div>
      <div className="social-icons"></div>
    </footer>
  );
};

export default Footer;
