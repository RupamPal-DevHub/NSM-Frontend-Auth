import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignInTwoFA = () => {
  const Navigate = useNavigate();
  function handleSubmit(e: any) {
    e.preventDefault();
    Navigate("/signinbackupcode");
  }
  return (
    <>
      <ArrowLeft
        className="m-5 lg:m-10 absolute cursor-pointer"
        onClick={() => Navigate("/signinpin")}
      />
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-wrap w-[90%] lg:w-[70%]  justify-between ">
          <div className="flex flex-col justify-center h-max lg:h-screen mt-28 lg:mt-0">
            <p className="font-bold text-4xl ">Enter Two FA</p>

            <p className="font-bold my-5">
              Enter 2FA code to protect your account <br />
              from being accessed by any other profile.
            </p>
          </div>
          <div className="h-max lg:h-screen flex items-center mt-10 lg:mt-0 w-full lg:w-max">
            <div className="w-full lg:w-96  p-8 shadow-2xl rounded-xl my-2 ">
              <p className="my-4 font-bold text-2xl">Verification</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="number"
                  name="email"
                  required
                  placeholder="Enter Two FA Code"
                  className="my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
                />
                <p
                  className="text-right font-bold text-xs p-2 text-maintheme cursor-pointer"
                  onClick={() => Navigate("/resettwofaform")}
                >
                  Forget Two FA Code?
                </p>

                <button
                  type="submit"
                  className="w-full  py-4 text-white bg-maintheme rounded-xl text-lg font-semibold cursor-pointer mt-5"
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

export default SignInTwoFA;
