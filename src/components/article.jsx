import CustomButton from "./CustomButton";
import HeaderSection from "./Header";

function ArticleSection() {
  return (
    <>
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <video
          src="https://videos.pexels.com/video-files/3163534/3163534-hd_1920_1080_30fps.mp4"
          autoPlay={true}
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none blur"
        />

        <div className="absolute z-20 top-0 left-0 right-0 bottom-0 flex flex-column items-center justify-center">
          <p className="border-1 text-xl py-2 rounded-3xl font-bold px-4 text-white border-gray-300 ">
            {" "}
            WELCOME TO GYANHUB
          </p>
          <h1 className="text-7xl mt-5 font-bold text-white">
            Endless Possibilities With <span>Gyan</span>
            <span className="text-yellow-400">Hub</span>
          </h1>
          <h1 className="text-white  text-2xl mt-3 mb-5">
            {" "}
            Search for PDFs, Roadmaps and Videos
          </h1>
          <div className="flex space-x-7">
            <CustomButton ButtonName="Get Started"></CustomButton>{" "}
            <CustomButton ButtonName="About Us" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleSection;
