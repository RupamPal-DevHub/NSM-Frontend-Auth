import Logo from "../assets/images/image.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const SignUpHome = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-wrap-reverse w-[80%] sm:w-[60%]  justify-between">
          <div>
            <p className="font-bold text-5xl">
              Sign up to <br />{" "}
              <span className="text-4xl">North Star metrics </span>
            </p>
            <button
              className="bg-maintheme text-white  py-4 w-full my-5 rounded-xl font-bold"
              onClick={() => Navigate("/signupform")}
            >
              Register
            </button>
            <p className="font-bold">
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
          <div className="w-full sm:w-max flex justify-center m-10 sm:m-0">
            <img src={Logo} alt="NSM" className="w-56" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpHome;
