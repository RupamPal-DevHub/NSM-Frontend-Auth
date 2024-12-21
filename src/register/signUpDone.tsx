import Logo from "../assets/images/ladysuccess.png";
import Navbar from "../components/navbar";

const SignUpDone = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-wrap-reverse w-[80%] sm:w-[60%]  justify-between items-center">
          <div>
            <p className="font-bold text-4xl">Congratulations !!!</p>

            <p className="font-bold text-xl my-5">
              Your Profile has been created successfully. <br />
              <br />
              <span className="text-2xl">Welcome Aboard </span>
            </p>
          </div>
          <div className="w-full sm:w-max flex justify-center m-10 sm:m-0">
            <img src={Logo} alt="NSM" className="w-96" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpDone;
