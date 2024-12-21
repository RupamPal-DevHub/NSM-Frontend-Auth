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
import SignInQRCode from "../login/signInQRCode";
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
import ProtectedRoute from "../middleware/ProtectedRoutes";

const router = createBrowserRouter([
  //-------------------------------------sign up flow-----------------------------------------------------

  { path: "/", element: <SignUpHome /> },
  { path: "/signupform", element: <SignUpForm /> },
  {
    path: "/signupverification",
    element: (
      <ProtectedRoute path={"signupverification"}>
        <SignUpVerification />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signuppin",
    element: (
      <ProtectedRoute path={"signuppin"}>
        <SignUpPin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signupdone",
    element: (
      <ProtectedRoute path={"signupdone"}>
        <SignUpDone />
      </ProtectedRoute>
    ),
  },

  //-------------------------------------sign in flow-----------------------------------------------------

  { path: "/signinhome", element: <SignInHome /> },
  { path: "/signinform", element: <SignInForm /> },
  {
    path: "/signinverification",
    element: (
      <ProtectedRoute path={"signinverification"}>
        <SignInVerification />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signinpin",
    element: (
      <ProtectedRoute path={"signinpin"}>
        <SignInPin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signinqrcode",
    element: (
      <ProtectedRoute path={"signinqrcode"}>
        <SignInQRCode />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signintwofa",
    element: (
      <ProtectedRoute path={"signintwofa"}>
        <SignInTwoFA />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signinbackupcode",
    element: (
      <ProtectedRoute path={"signinbackupcode"}>
        <SignInBackupCode />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signinsuccess",
    element: (
      <ProtectedRoute path={"signinsuccess"}>
        <SignInSuccess />
      </ProtectedRoute>
    ),
  },

  //-------------------------------------reset password flow-------------------------------------------------

  {
    path: "/resetpassform",
    element: (
      <ProtectedRoute path={"resetpassform"}>
        <ResetPassForm />
      </ProtectedRoute>
    ),
  },
  {
    path: "/resetpassverification",
    element: (
      <ProtectedRoute path={"resetpassverification"}>
        <ResetPassVerification />
      </ProtectedRoute>
    ),
  },
  {
    path: "/resetpasssetnew",
    element: (
      <ProtectedRoute path={"resetpasssetnew"}>
        <ResetPassSetNew />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/resetpassdone",
    element: (
      <ProtectedRoute path={"resetpassdone"}>
        <ResetPassDone />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/resetpasssuccess",
    element: (
      <ProtectedRoute path={"resetpasssuccess"}>
        <ResetPassSuccess />{" "}
      </ProtectedRoute>
    ),
  },

  //-------------------------------------reset pin flow-------------------------------------------------

  {
    path: "/resetpinform",
    element: (
      <ProtectedRoute path={"resetpinform"}>
        <ResetPinForm />
      </ProtectedRoute>
    ),
  },
  {
    path: "/resetpinpass",
    element: (
      <ProtectedRoute path={"resetpinpass"}>
        <ResetPinPass />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/resetpinverification",
    element: (
      <ProtectedRoute path={"resetpinverification"}>
        <ResetPinVerification />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/resetpin",
    element: (
      <ProtectedRoute path={"resetpin"}>
        <ResetPin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/resetpinsuccess",
    element: (
      <ProtectedRoute path={"resetpinsuccess"}>
        <ResetPinSuccess />{" "}
      </ProtectedRoute>
    ),
  },

  //-------------------------------------reset two fa-------------------------------------------------

  {
    path: "/resettwofaform",
    element: (
      <ProtectedRoute path={"resettwofaform"}>
        <ResetTwoFAForm />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/resettwofaverification",
    element: (
      <ProtectedRoute path={"resettwofaverification"}>
        <ResetTwoFAVerification />
      </ProtectedRoute>
    ),
  },
  {
    path: "/resettwofapass",
    element: (
      <ProtectedRoute path={"resettwofapass"}>
        <ResetTwoFAPass />
      </ProtectedRoute>
    ),
  },
  {
    path: "/resettwofapin",
    element: (
      <ProtectedRoute path={"resettwofapin"}>
        <ResetTwoFAPin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/resettwofabcode",
    element: (
      <ProtectedRoute path={"resettwofabcode"}>
        <ResetTwoFABCode />{" "}
      </ProtectedRoute>
    ),
  },
]);
export default router;
