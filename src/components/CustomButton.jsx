function CustomButton({ ButtonName, handleOnClick }) {
  handleOnClick = ({ Page }) => {
    console.log("sdsds");
  };
  return (
    <>
      <button
        className=" text-black flex w-max object-cover px-4   rounded-full items-center font-base py-2 bg-white hover:bg-yellow-400
      "
      >
        <a href="#">{ButtonName}</a>
      </button>
    </>
  );
}

export default CustomButton;
