function HeaderSection() {
  return (
    <>
      <div className="Navbar justify-between flex px-3 py-3  bg-violet-950 align-content-center sticky z-30 ">
        <div className="navLogo mx-4 h-10 w-20">
          <h1 className="font-extrabold text-3xl space-x-1 ">
            <span className="text-white">Gyan</span>
            <span className="text-black bg-yellow-300 px-2">Hub</span>
          </h1>
        </div>
        <div className="nav-items space-x-12 text-white">
          <a className="text-xl " href="#">
            Home
          </a>
          <a className="text-xl " href="#">
            About
          </a>
          <a className="text-xl" href="#">
            Offering
          </a>
        </div>
        <button className="px-4 py-1 bg-white rounded-3xl font-extrabold hover:bg-gray-200 !important">
          Get Started
        </button>
      </div>
    </>
  );
}

export default HeaderSection;
