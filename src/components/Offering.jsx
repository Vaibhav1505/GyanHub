import OfferCard from "./OfferCard";

function Offering() {
  return (
    <>
      <div className="flex justify-evenly bg-violet-900">
        <h1 className="text-8xl font-extrabold text-white px-2 py-16">
          What we Offer
        </h1>
        <div className="grid-cols-2">
          <OfferCard CardTitle="Roadmaps" CardDescription="dsdsd" />
          <OfferCard CardTitle="Videos" CardDescription="dsdsd" />
          <OfferCard CardTitle="PDFs" CardDescription="dsdsd" />
          <OfferCard CardTitle="Content" CardDescription="dsdsd" />
        </div>
      </div>
    </>
  );
}

export default Offering;
