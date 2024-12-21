import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  forgotPasswordCaptcha,
  forgotPasswordRequest,
} from "../apiCalls/apiCalls";

const ResetPassForm = () => {
  const Navigate = useNavigate();

  const [captcha, setCaptcha] = useState({});

  useEffect(() => {
    const fetchCaptcha = async () => {
      try {
        const data: any = await forgotPasswordCaptcha();
        if (data) {
          setCaptcha(data.image);
        } else {
          console.error("Captcha not found in response");
        }
      } catch (error) {
        console.error("Error fetching captcha:", error);
      }
    };
    fetchCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: any = {
      email: formData.get("email")?.toString().trim(),
      captcha: formData.get("captcha")?.toString().trim(),
    };

    console.log("Form Data:", data);

    try {
      await forgotPasswordRequest(data);
      Navigate("/resetpassverification");
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
        onClick={() => Navigate("/signinform")}
      />
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-wrap w-[90%] lg:w-[70%]  justify-between ">
          <div className="flex flex-col justify-center h-max lg:h-screen mt-28 lg:mt-0">
            <p className="font-bold text-4xl ">
              Reset Password <br />
            </p>

            <p className="font-bold my-5">
              Return to{" "}
              <span
                className="text-maintheme cursor-pointer"
                onClick={() => Navigate("/signinform")}
              >
                Login
              </span>
            </p>
          </div>
          <div className="h-max lg:h-screen flex items-center mt-10 lg:mt-0 w-full lg:w-max">
            <div className="w-full lg:w-96  p-8 shadow-2xl rounded-xl my-2 ">
              <p className="my-4 font-bold text-2xl">Reset your password</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="E-mail" className="font-bold text-xs">
                  Enter your Mobile Number or E-mail
                  <input
                    type="text"
                    name="email"
                    required
                    placeholder="Mobile Number or E-mail"
                    className="my-4 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
                  />
                </label>

                <div className="w-28 border border-gray-700">
                  <img src={`${captcha}`} alt="Captcha" />
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
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassForm;
