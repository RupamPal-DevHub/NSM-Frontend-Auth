import Logo from "../assets/images/ladysuccess.png";
import Navbar from "../components/navbar";

const SignInSuccess = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  mt-40">
        <p className="font-bold text-2xl md:text-4xl text-center p-4">
          You Are Logged In Successfully{" "}
        </p>
      </div>
      <div className="w-full flex justify-center">
        <img src={Logo} alt="Success Img" className="w-96 mt-2" />
      </div>
    </>
  );
};

export default SignInSuccess;
