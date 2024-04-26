function CustomButton({ ButtonName, handleOnClick }) {
  handleOnClick = ({ Page }) => {
    console.log("sdsds");
  };
  return (
    <>
      <button
        className=" text-black flex w-max object-cover px-4   rounded-full items-center font-base py-2 bg-white hover:bg-yellow-400 delay-50 hover:-translate-y-1 ease-in-out duration-150 hover:  
      "
      >
        <a href="#">{ButtonName}</a>
      </button>
    </>
  );
}

export default CustomButton;
