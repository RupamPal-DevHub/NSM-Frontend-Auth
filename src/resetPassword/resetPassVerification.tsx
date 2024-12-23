import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyForgotPasswordOtp } from "../apiCalls/apiCalls";

const ResetPassVerification = () => {
  const Navigate = useNavigate();
  const [timer, setTimer] = useState(90);
  const [resendDisabled, setResendDisabled] = useState(true);
  useEffect(() => {
    if (resendDisabled && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setResendDisabled(false);
    }
  }, [timer, resendDisabled]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      emailOtp: Number(formData.get("emailOtp")),
      phoneOtp: Number(formData.get("phoneOtp")),
    };

    console.log("Form Data:", data);

    try {
      await verifyForgotPasswordOtp(data);
      Navigate("/resetpasssetnew");
    } catch (error: any) {
      alert(error.response?.data.message);
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      <ArrowLeft
        className="m-5 lg:m-10 absolute cursor-pointer"
        onClick={() => Navigate("/resetpassform")}
      />
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-wrap w-[90%] lg:w-[70%]  justify-between ">
          <div className="flex flex-col justify-center h-max lg:h-screen mt-28 lg:mt-0">
            <p className="font-bold text-4xl ">Account Verification</p>

            <p className="font-bold my-5">
              Enter the OTP sent to your abc@gmail.com
              <br /> and the +91 9********9.
            </p>
            <p className=" font-bold font-sans text-sm">
              Resend OTP in:{" "}
              <span className="text-maintheme font-bold ">
                {Math.floor(timer / 60)}:
                {timer % 60 < 10 ? `0${timer % 60}` : timer % 60} minutes.
              </span>
            </p>
          </div>
          <div className="h-max lg:h-screen flex items-center mt-10 lg:mt-0 w-full lg:w-max">
            <div className="w-full lg:w-96  p-8 shadow-2xl rounded-xl my-2 ">
              <p className="my-4 font-bold text-2xl">Verification</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="E-mail" className="font-bold text-xs">
                  Enter The code Sent To E-mail
                  <input
                    type="number"
                    name="emailOtp"
                    required
                    placeholder="Enter OTP"
                    className="my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
                  />
                </label>
                <p className="text-right font-bold text-xs p-2 text-maintheme">
                  Resend OTP
                </p>
                <label htmlFor="E-mail" className="font-bold text-xs">
                  Enter The code Sent To Mobile Number
                  <input
                    type="number"
                    name="phoneOtp"
                    required
                    placeholder="Enter OTP"
                    className="my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
                  />
                </label>
                <p className="text-right font-bold text-xs p-2 text-maintheme">
                  Resend OTP
                </p>
                <button
                  type="submit"
                  className="w-full  py-4 text-white bg-maintheme rounded-xl text-lg font-semibold cursor-pointer mt-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassVerification;
