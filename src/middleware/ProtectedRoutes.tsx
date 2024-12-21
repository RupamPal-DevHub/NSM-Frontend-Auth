import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode; // Represents the child components wrapped by the ProtectedRoute
  path: string; // Represents the path to check for protection logic
}

interface AuthState {
  auth: {
    register: {
      signupverification: boolean;
      signuppin: boolean;
      signupdone: boolean;
    };
    signin: {
      signinverification: boolean;
      signinpin: boolean;
      qrcodeverify: boolean;
      signintwofa: boolean;
      signinbackupcode: boolean;
      signinsuccess: boolean;
    };
    resetpass: {
      resetpassform: boolean;
      resetpassverification: boolean;
      resetpasssetnew: boolean;
      resetpassdone: boolean;
      resetpasssuccess: boolean;
    };
    resetpin: {
      resetpinform: boolean;
      resetpinpass: boolean;
      resetpinverification: boolean;
      resetpin: boolean;
      resetpinsuccess: boolean;
    };
    reset2fa: {
      resettwofaform: boolean;
      resettwofaverification: boolean;
      resettwofapass: boolean;
      resettwofapin: boolean;
      resettwofabcode: boolean;
    };
  };
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, path }) => {
  const { register, signin, resetpass, resetpin, reset2fa, logout } =
    useSelector((state: AuthState) => state.auth);

  // Register-related routes
  if (path === "verification" && !register.verification) {
    return <Navigate to="/signup" replace />;
  }

  if (path === "setuppin" && !register.setUpPin) {
    return <Navigate to="/signup" replace />;
  }

  if (path === "welcomeaboard" && !register.welcomeaboard) {
    return <Navigate to="/signup" replace />;
  }

  // Login-related routes
  if (path === "LoginVerification" && !signin.loginverification) {
    return <Navigate to="/signinpage" replace />;
  }

  if (path === "enterpin" && !signin.enterpin) {
    return <Navigate to="/signinpage" replace />;
  }

  if (path === "qrcodeverify" && !signin.qrcodeverify) {
    return <Navigate to="/signinpage" replace />;
  }

  if (path === "loginentertwofa" && !signin.loginentertwofa) {
    return <Navigate to="/signinpage" replace />;
  }

  if (path === "backupcode" && !signin.backupcode) {
    return <Navigate to="/signinpage" replace />;
  }

  if (path === "loginSuccess" && !signin.loginSuccess) {
    return <Navigate to="/signinpage" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
