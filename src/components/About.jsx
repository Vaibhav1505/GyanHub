import backgroundImage from "../assets/images/abdul-a-wmdfPWB2lWM-unsplash.jpg";

function AboutUs() {
  return (
    <div
      className=" mx-auto  bg-black   flex flex-row relative items-center space-x-16 h-screen bg-cover bg-center  "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      
      <div className=" w-1/2 relative bottom-12">
        <h1 className="font-bold py-6  text-6xl  text-white text-center ">
          About 
          {/* Gyan */}
          {/* <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text font-bold ">
            Hub
          </span> */}
        </h1>
        <h1 className="text-gray-400 text-center font-base text-2xl px-16  ">
          GyanHub, where learning meets innovation! Our platform is your
          one-stop destination for personalized education, offering tailored
          you're exploring new subjects or diving deep into familiar topics,
          GyanHub empowers you to discover, learn, and grow at your own pace.
          Join us and unlock the doors to endless learning possibilities!
        </h1>
      </div>
    </div>
  );
}

export default AboutUs;
