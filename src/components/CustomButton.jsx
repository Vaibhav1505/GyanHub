import { Button } from "bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

function CustomButton({ ButtonName, handleOnClick }) {
  handleOnClick = ({ Page }) => {
    console.log("sdsds");
  };
  return (
    <>
      <button
        onClick={handleOnClick}
        className="px-4 py-2 z-20 font-bold text-white   rounded-3xl bg-violet-900 hover:bg-violet-800"
      >
        {ButtonName}
      </button>
    </>
  );
}

export default CustomButton;
