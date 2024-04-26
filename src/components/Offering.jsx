import OfferCard from "./OfferCard";
import CustomButton from "./CustomButton";
import videoImg from "../assets/images/yttt.webp";
import pdfImg from "../assets/images/pdff.webp";
import roadmapImg from "../assets/images/rdmp.png";
import backgroundImage from "../assets/images/offer-bg.avif";
import "../App.css";

function Offering() {
  return (
    <>
      <div
        className="  space-x-5  justify-evenly    mx-auto  bg-black     relative  items-center  h-screen bg-cover bg-center  space-y-10"
        
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        // }}
        
      >
        <h1 className="text-5xl text-center font-bold text-white " >Features</h1>
        <div className="flex flex-row justify-evenly">
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
      </div>
      {/* <BentoCardItem title="hellocard" description="What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

" image="data:image/jpeg;base64,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"></BentoCardItem> */}
    </>
  );
}

export default Offering;
