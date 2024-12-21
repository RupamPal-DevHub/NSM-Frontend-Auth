import { useState } from "react";
import PasswordInputSingle from "../components/PasswordInputSingle";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const Navigate = useNavigate();
  const [passwordData, setPasswordData] = useState({
    password: "",
  });

  const handlePasswordChange = (updatedPasswordData: { password: string }) => {
    setPasswordData(updatedPasswordData);
  };
  function handleSubmit(e: any) {
    e.preventDefault();
    Navigate("/signinverification");
  }
  return (
    <>
      <ArrowLeft
        className="m-5 lg:m-10 absolute cursor-pointer"
        onClick={() => Navigate("/signinhome")}
      />
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-wrap w-[90%] lg:w-[70%]  justify-between ">
          <div className="flex flex-col justify-center h-max lg:h-screen mt-28 lg:mt-0">
            <p className="font-bold text-5xl ">
              Sign in to <br />{" "}
              <span className="text-4xl">North Star metrics </span>
            </p>

            <p className="font-bold my-5">
              If you do not have an account <br />
              You can{" "}
              <span
                className="text-maintheme cursor-pointer"
                onClick={() => Navigate("/signinhome")}
              >
                Sign Up
              </span>{" "}
              here !
            </p>
          </div>
          <div className="h-max lg:h-screen flex items-center mt-10 lg:mt-0 w-full lg:w-max">
            <div className="w-full lg:w-96  p-8 shadow-2xl rounded-xl my-2 ">
              <p className="my-4 font-bold text-2xl">Sign In</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Email"
                  className="my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
                />

                <div className="mb-4">
                  <PasswordInputSingle
                    onPasswordChange={handlePasswordChange}
                  />
                  <p
                    className="text-right font-bold text-xs p-2 text-maintheme cursor-pointer"
                    onClick={() => Navigate("/resetpassform")}
                  >
                    Forget Password?
                  </p>
                </div>
                <div className="w-32 h-14 border border-gray-700">
                  <img src="" alt="Captcha" />
                </div>
                <input
                  type="text"
                  name="captcha"
                  required
                  placeholder="Enter Captcha"
                  className="my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
                />
                <button
                  type="submit"
                  className="w-full  py-4 text-white bg-maintheme rounded-xl text-lg font-semibold cursor-pointer"
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

export default SignInForm;
