import OfferCard from "./OfferCard";
import CustomButton from "./CustomButton";
import videoImg from "../assets/images/youtube-logo-240.png";
import pdfImg from "../assets/images/file-pdf-solid-240.png";
import roadmapImg from "../assets/images/map-regular-240.png";
import backgroundImage from "../assets/images/pexels-nick-collins-1293120.jpg";
import '../App.css'

function Offering() {
  return (
    <>
      <div className="flex justify-start space-x-5 absolute bg-gray-900 py-5  ">
        <h1 className="text-white relative   font-bold text-7xl m-auto ">Features</h1>
        <OfferCard
          title="Video recommendation"
          description="GyanHub video recommendations help you find more of the videos that you love."
          image={videoImg}
        ></OfferCard>
        <OfferCard
          title="PDF suggestions"
          description="Seamlessly add suggestions to PDF documents: With just a few clicks, you can effortlessly annotate and provide suggestions directly on your PDF files."
          image={pdfImg}
        ></OfferCard>
        <OfferCard
          title="Roadmaps"
          description="GyanHub shows you the Roadmap which helps you to find the effective way to complete your task"
          image={roadmapImg}
        ></OfferCard>
        {/* <button className="font-bold">
            <CustomButton ButtonName='click me'></CustomButton>
          </button> */}
      </div>
    </>
  );
}

export default Offering;
