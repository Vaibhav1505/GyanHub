import CustomButton from "./CustomButton";

function HeaderSection() {
  return (
    <>
      <nav className="custom-nav font-semibold text-black mx-10">
        <div className="flex justify-between my-4  items-center  ">
          <div className="text-white font-bold text-xl space-x-1">
            <span className="font-bold">ज्ञान</span>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text font-bold  ">
              Hub
            </span>
          </div>
          <div className="flex space-x-8 list-none items-center  text-gray-600  px-5 py-2 ">
            <li className="hover:text-white delay-50 ease-in-out duration-200">
              <a href="#">Features</a>
            </li>
            <li className="hover:text-white delay-50 ease-in-out duration-200">
              <a href="#">Docs</a>
            </li>
            <li className="hover:text-white delay-50 ease-in-out duration-200">
              <a href="#">About</a>
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
