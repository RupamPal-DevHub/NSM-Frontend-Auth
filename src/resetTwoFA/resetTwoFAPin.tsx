import { ArrowLeft } from "lucide-react";
import PinSetupCardTwoFAReset from "../components/PinSetupCardTwoFAReset";
import { useNavigate } from "react-router-dom";

const ResetTwoFAPin = () => {
  const Navigate = useNavigate();
  return (
    <>
      <ArrowLeft
        className="m-5 lg:m-10 absolute cursor-pointer"
        onClick={() => Navigate("/resettwofapass")}
      />
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-wrap w-[90%] lg:w-[70%]  justify-between ">
          <div className="flex flex-col justify-center h-max lg:h-screen mt-28 lg:mt-0">
            <p className="font-bold text-4xl ">Enter PIN</p>

            <p className="font-bold my-5">
              Setup PIN to protect your account <br /> from being accessed by
              any other profile.
            </p>
          </div>
          <div className="h-max lg:h-screen flex items-center mt-10 lg:mt-0 w-full lg:w-max">
            <div className="w-full lg:w-96  p-8 shadow-2xl rounded-xl my-2 ">
              <PinSetupCardTwoFAReset />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetTwoFAPin;
