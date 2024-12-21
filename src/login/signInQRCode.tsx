import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SignInQRCode = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const { response } = location.state || {};
  console.log("Data from previous route qr:", response);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    Navigate("/signintwofa");
  };

  return (
    <>
      <ArrowLeft
        className="m-5 lg:m-10 absolute cursor-pointer"
        onClick={() => Navigate("/signinpin")}
      />
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-wrap w-[90%] xl:w-[70%]  justify-between ">
          <div className="flex flex-col justify-center h-max xl:h-screen mt-28 xl:mt-0">
            <img
              src={response.QRCode}
              alt="QRCODE"
              className=" h-80 w-80 border-4 rounded-xl"
            />
            <p className="text-xl font-bold mt-8">Text Code</p>
            <p className="text-sm font-semibold text-white bg-slate-500 p-4 rounded-xl mt-1">
              {response.secretKey}
            </p>
          </div>
          <div className="h-max xl:h-screen flex items-center mt-10 xl:mt-0 w-full xl:w-max mb-10 xl:mb-0">
            <div className="w-full xl:w-96  p-8 shadow-2xl rounded-xl my-2 ">
              <p className="font-bold">
                Scan the image with the two factor authentication app on your
                phone and enter the verification code. If you can’t use a
                barcode use the text code instead.
              </p>
              <div className="bg-slate-300 h-1 w-full my-5"></div>
              <p className="my-4 font-bold text-2xl">Verification Code</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="number"
                  name="email"
                  required
                  placeholder="Enter Code"
                  className="my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
                />

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

export default SignInQRCode;
