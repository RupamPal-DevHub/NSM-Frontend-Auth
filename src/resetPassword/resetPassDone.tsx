import Logo from "../../public/ladysuccess.png";

const ResetPassDone = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-wrap-reverse w-[80%] sm:w-[60%]  justify-between items-center">
          <div>
            <p className="font-bold text-xl my-5">
              A verification link has been sent to <br />
              email please verify to confirm reset
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

export default ResetPassDone;
