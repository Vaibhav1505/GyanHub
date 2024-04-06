function AboutCard({ Name }) {
  return (
    <>
      <div className="bg flex-column align-content-center border-2 bg-violet-400 w-44 rounded-2xl bg-gradient-to-tl from-violet-500 to-blue-900 ">
        <div className=" h-36 w-36 ">
          <img
            className="rounded-full"
            src="https://askproject.net/legion/wp-content/uploads/sites/162/2023/11/portrait-of-successful-adult-businesswoman-8Q6WRTK.jpg"
            alt=""
          />
        </div>
        <h1 className="text-xl font-bold text-white">{Name}</h1>

        <div className="">
          <h1>LinkedIn</h1>
          <h1>Insatram</h1>
          <h1>Email</h1>
        </div>
      </div>
    </>
  );
}

export default AboutCard;
