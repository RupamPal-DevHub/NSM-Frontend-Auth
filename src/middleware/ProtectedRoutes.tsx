import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  path: string;
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
  const { register, signin, resetpass, resetpin, reset2fa } = useSelector(
    (state: AuthState) => state.auth
  );

  // Register-related routes

  if (path === "signupverification" && !register.signupverification) {
    return <Navigate to="/signupform" replace />;
  }

  if (path === "signuppin" && !register.signuppin) {
    return <Navigate to="/signupform" replace />;
  }

  if (path === "signupdone" && !register.signupdone) {
    return <Navigate to="/signupform" replace />;
  }

  // Login-related routes

  if (path === "signinverification" && !signin.signinverification) {
    return <Navigate to="/signinpage" replace />;
  }

  if (path === "signinpin" && !signin.signinpin) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "qrcodeverify" && !signin.qrcodeverify) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "signintwofa" && !signin.signintwofa) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "signinbackupcode" && !signin.signinbackupcode) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "signinsuccess" && !signin.signinsuccess) {
    return <Navigate to="/signinform" replace />;
  }

  // Reset Password-related routes

  if (path === "resetpassform" && !resetpass.resetpassform) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "resetpassverification" && !resetpass.resetpassverification) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "resetpasssetnew" && !resetpass.resetpasssetnew) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "resetpassdone" && !resetpass.resetpassdone) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "resetpasssuccess" && !resetpass.resetpasssuccess) {
    return <Navigate to="/signinform" replace />;
  }

  // Reset Pin-related routes

  if (path === "resetpinform" && !resetpin.resetpinform) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "resetpinpass" && !resetpin.resetpinpass) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "resetpinverification" && !resetpin.resetpinverification) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "resetpin" && !resetpin.resetpin) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "resetpinsuccess" && !resetpin.resetpinsuccess) {
    return <Navigate to="/signinform" replace />;
  }

  // Reset 2fa-related routes

  if (path === "resettwofaform" && !reset2fa.resettwofaform) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "resettwofaverification" && !reset2fa.resettwofaverification) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "resettwofapass" && !reset2fa.resettwofapass) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "resettwofapin" && !reset2fa.resettwofapin) {
    return <Navigate to="/signinform" replace />;
  }

  if (path === "resettwofabcode" && !reset2fa.resettwofabcode) {
    return <Navigate to="/signinform" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
