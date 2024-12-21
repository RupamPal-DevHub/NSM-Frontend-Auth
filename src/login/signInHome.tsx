import Logo from "../../public/logo.png";
import { useNavigate } from "react-router-dom";

const SignInHome = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-wrap-reverse w-[80%] sm:w-[60%]  justify-between">
          <div>
            <p className="font-bold text-5xl">
              Sign in to <br />{" "}
              <span className="text-4xl">North Star metrics </span>
            </p>
            <button
              className="bg-maintheme text-white  py-4 w-full my-5 rounded-xl font-bold"
              onClick={() => Navigate("/signinform")}
            >
              Login
            </button>
            <p className="font-bold">
              If you do not have an account <br />
              You can{" "}
              <span className="text-maintheme" onClick={() => Navigate("/")}>
                Sign Up
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

export default SignInHome;
