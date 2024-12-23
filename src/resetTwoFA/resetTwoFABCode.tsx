import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ResetTwoFABCode = () => {
  const Navigate = useNavigate();
  function handleSubmit(e: any) {
    e.preventDefault();
    alert("Next page in not done yet");
    // Navigate("/signinverification");
  }
  return (
    <>
      <ArrowLeft
        className="m-5 lg:m-10 absolute cursor-pointer"
        onClick={() => Navigate("/resettwofapin")}
      />
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-wrap w-[90%] lg:w-[70%]  justify-between ">
          <div className="flex flex-col justify-center h-max lg:h-screen mt-28 lg:mt-0">
            <p className="font-bold text-4xl ">Enter BackUp Codes</p>

            <p className="font-bold my-5">
              Enter the backup code from the 10 codes <br />
              sent to you while signing up! or Request a <br />
              new one
              <span className="text-maintheme cursor-pointer"> here.</span>
            </p>
          </div>
          <div className="h-max lg:h-screen flex items-center mt-10 lg:mt-0 w-full lg:w-max">
            <div className="w-full lg:w-96  p-8 shadow-2xl rounded-xl my-2 ">
              <p className="my-4 font-bold text-2xl">Reset Two FA</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="E-mail" className="font-bold text-xs">
                  Enter Backup code
                  <input
                    type="text"
                    name="email"
                    required
                    placeholder="Enter 2fa code"
                    className="my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
                  />
                </label>

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

export default ResetTwoFABCode;
