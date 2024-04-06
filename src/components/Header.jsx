import CustomButton from "./CustomButton";

function HeaderSection() {
  return (
    <>
      <nav className="custom-nav font-semibold text-black mx-10">
        <div className="flex justify-between my-4  items-center  ">
          <div className="text-white font-bold text-xl">
            <h1>
              Gyan
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text font-bold ">
                Hub
              </span>
            </h1>
          </div>
          <div className="flex space-x-8 list-none items-center rounded-full bg-white px-5 py-2">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
          </div>
          <CustomButton
            ButtonName="Get Started"
            handleOnClick={console.log("hello")}

          ></CustomButton>
        </div>
      </nav>
    </>
  );
}

export default HeaderSection;
