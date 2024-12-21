import { useState, useEffect } from "react";
import PasswordInput from "../components/PasswordInput";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { registerCaptcha, registerBase } from "../apiCalls/apiCalls";

const SignUpForm = () => {
  const Navigate = useNavigate();
  const [captcha, setCaptcha] = useState({});
  const [passwordData, setPasswordData] = useState({
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const fetchCaptcha = async () => {
      try {
        const data: any = await registerCaptcha();
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

  const handlePasswordChange = (updatedPasswordData: {
    password: string;
    confirmPassword: string;
  }) => {
    setPasswordData(updatedPasswordData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: any = {
      email: formData.get("email")?.toString().trim(),
      countryCode: formData.get("countryCode")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      captcha: formData.get("captcha")?.toString().trim(),
      password: passwordData.password.trim(),
      confirmpassword: passwordData.confirmPassword.trim(),
    };

    console.log("Form Data:", data);

    try {
      await registerBase(data);
    } catch (error: any) {
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
        onClick={() => Navigate("/")}
      />
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-wrap w-[90%] lg:w-[70%]  justify-between ">
          <div className="flex flex-col justify-center h-max lg:h-screen mt-28 lg:mt-0">
            <p className="font-bold text-5xl ">
              Sign up to <br />{" "}
              <span className="text-4xl">North Star metrics </span>
            </p>

            <p className="font-bold my-5">
              If you already have an account <br />
              You can{" "}
              <span
                className="text-maintheme cursor-pointer"
                onClick={() => Navigate("/signinhome")}
              >
                Login
              </span>{" "}
              here !
            </p>
          </div>
          <div className="h-max lg:h-screen flex items-center mt-10 lg:mt-0 w-full lg:w-max">
            <div className="w-full lg:w-96  p-8 shadow-2xl rounded-xl my-2 ">
              <p className="my-4 font-bold text-2xl">Sign Up</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Email"
                  className="my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
                />

                <input
                  type="number"
                  name="countryCode"
                  required
                  placeholder="Enter Country Code"
                  className="my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
                />
                <input
                  type="number"
                  name="phone"
                  required
                  placeholder="Enter Contact Number"
                  className="my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
                />
                <div className="mb-4">
                  <PasswordInput onPasswordChange={handlePasswordChange} />
                </div>
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

export default SignUpForm;