import CustomButton from "./CustomButton";

function MainSlogan() {
  return (
    <>
      <div className="space-y-14 items-center mt-20  w-1/2 ">
        <div className=" items-center mt-40 mx-20">
          <h1 className="font-bold text-white text-5xl">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text font-bold text-5xl">
              GyanHub:
            </span>
            Your AI based Learning Platform
          </h1>
          <p className="text-lg text-gray-300 mt-7">
            Empowering Education Through AI: Transformative Learning, Unmatched
            Insights.
          </p>
          <div className="flex space-x-3 my-3 ">
            <input type="text" placeholder="Enter Email Here" className="bg-gray-200 text-gray-600 rounded-full py-2 px-9" />
            <CustomButton ButtonName="Send"></CustomButton>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default MainSlogan;
