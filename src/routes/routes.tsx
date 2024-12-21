import { createBrowserRouter } from "react-router-dom";
import SignUpHome from "../register/signUpHome";
import SignUpForm from "../register/signUpForm";
import SignUpVerification from "../register/signUpVerification";
import SignUpPin from "../register/signUpPin";
import SignUpDone from "../register/signUpDone";
import SignInHome from "../login/signInHome";
import SignInForm from "../login/signInForm";
import SignInVerification from "../login/signInVerification";
import SignInPin from "../login/signInPin";
import SignInTwoFA from "../login/signInTwoFA";
import SignInBackupCode from "../login/signInBackupCode";
import SignInSuccess from "../login/signInSuccess";
import ResetPassForm from "../resetPassword/resetPassForm";
import ResetPassVerification from "../resetPassword/resetPassVerification";
import ResetPassSetNew from "../resetPassword/resetPassSetNew";
import ResetPassDone from "../resetPassword/resetPassDone";
import ResetPassSuccess from "../resetPassword/resetPassSuccess";
import ResetPinForm from "../resetPin/resetPinForm";
import ResetPinPass from "../resetPin/resetPinPass";
import ResetPinVerification from "../resetPin/resetPinVerification";
import ResetPin from "../resetPin/resetPin";
import ResetPinSuccess from "../resetPin/resetPinSuccess";
import ResetTwoFAForm from "../resetTwoFA/resetTwoFAForm";
import ResetTwoFAVerification from "../resetTwoFA/resetTwoFAVerification";
import ResetTwoFAPass from "../resetTwoFA/resetTwoFAPass";
import ResetTwoFAPin from "../resetTwoFA/resetTwoFAPin";
import ResetTwoFABCode from "../resetTwoFA/resetTwoFABCode";

const router = createBrowserRouter([
  //-------------------------------------sign up flow-----------------------------------------------------

  { path: "/", element: <SignUpHome /> },
  { path: "/signupform", element: <SignUpForm /> },
  { path: "/signupverification", element: <SignUpVerification /> },
  { path: "/signuppin", element: <SignUpPin /> },
  { path: "/signupdone", element: <SignUpDone /> },

  //-------------------------------------sign in flow-----------------------------------------------------

  { path: "/signinhome", element: <SignInHome /> },
  { path: "/signinform", element: <SignInForm /> },
  { path: "/signinverification", element: <SignInVerification /> },
  { path: "/signinpin", element: <SignInPin /> },
  { path: "/signintwofa", element: <SignInTwoFA /> },
  { path: "/signinbackupcode", element: <SignInBackupCode /> },
  { path: "/signinsuccess", element: <SignInSuccess /> },

  //-------------------------------------reset password flow-------------------------------------------------

  { path: "/resetpassform", element: <ResetPassForm /> },
  { path: "/resetpassverification", element: <ResetPassVerification /> },
  { path: "/resetpasssetnew", element: <ResetPassSetNew /> },
  { path: "/resetpassdone", element: <ResetPassDone /> },
  { path: "/resetpasssuccess", element: <ResetPassSuccess /> },

  //-------------------------------------reset pin flow-------------------------------------------------

  { path: "/resetpinform", element: <ResetPinForm /> },
  { path: "/resetpinpass", element: <ResetPinPass /> },
  { path: "/resetpinverification", element: <ResetPinVerification /> },
  { path: "/resetpin", element: <ResetPin /> },
  { path: "/resetpinsuccess", element: <ResetPinSuccess /> },

  //-------------------------------------reset two fa-------------------------------------------------

  { path: "/resettwofaform", element: <ResetTwoFAForm /> },
  { path: "/resettwofaverification", element: <ResetTwoFAVerification /> },
  { path: "/resettwofapass", element: <ResetTwoFAPass /> },
  { path: "/resettwofapin", element: <ResetTwoFAPin /> },
  { path: "/resettwofabcode", element: <ResetTwoFABCode /> },
]);
export default router;
