import Logo from "../../public/ladysuccess.png";

const ResetPassSuccess = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-wrap-reverse w-[80%] sm:w-[60%]  justify-between items-center">
          <div className="mt-10">
            <p className="font-bold text-4xl">Congratulations !!!</p>

            <p className="font-bold text-xl my-5">
              Password has been reset sucessfully! <br />
              <span className="text-maintheme">Login</span> to continue <br />
              <br />
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

export default ResetPassSuccess;
