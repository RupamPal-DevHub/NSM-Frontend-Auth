import Logo from "../../public/ladysuccess.png";
const SignInSuccess = () => {
  return (
    <>
      <div className="w-full  mt-24">
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
