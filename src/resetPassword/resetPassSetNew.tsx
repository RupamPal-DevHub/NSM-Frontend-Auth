import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../apiCalls/apiCalls";

const ResetPassSetNew = () => {
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
    const data: any = {
      newPassword: formData.get("newPassword"),
      confirmpassword: formData.get("confirmpassword"),
    };

    console.log("Form Data:", data);

    try {
      await resetPassword(data);
      Navigate("/resetpassdone");
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
        onClick={() => Navigate("/resetpassverification")}
      />
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-wrap w-[90%] lg:w-[70%]  justify-between ">
          <div className="flex flex-col justify-center h-max lg:h-screen mt-28 lg:mt-0">
            <p className="font-bold text-4xl ">Reset Password</p>

            <p className="font-bold my-5">
              Set your new password and confirm <br />
              your password.
            </p>
          </div>
          <div className="h-max lg:h-screen flex items-center mt-10 lg:mt-0 w-full lg:w-max">
            <div className="w-full lg:w-96  p-8 shadow-2xl rounded-xl my-2 ">
              <p className="my-4 font-bold text-2xl">Reset your password</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="E-mail" className="font-bold text-xs">
                  Enter Your New Password
                  <input
                    type="text"
                    name="newPassword"
                    required
                    placeholder="Enter Password"
                    className="my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
                  />
                </label>

                <label htmlFor="E-mail" className="font-bold text-xs">
                  Confirm Your New Password
                  <input
                    type="text"
                    name="confirmpassword"
                    required
                    placeholder="Confirm Password"
                    className="my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full  py-4 text-white bg-maintheme rounded-xl text-lg font-semibold cursor-pointer mt-2"
                >
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassSetNew;
