import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: {
    signupverification: false,
    signuppin: false,
    signupdone: false,
  },
  signin: {
    signinverification: false,
    signinpin: false,
    qrcodeverify: false,
    signintwofa: false,
    signinbackupcode: false,
    signinsuccess: false,
  },
  resetpass: {
    resetpassform: false,
    resetpassverification: false,
    resetpasssetnew: false,
    resetpassdone: false,
    resetpasssuccess: false,
  },
  resetpin: {
    resetpinform: false,
    resetpinpass: false,
    resetpinverification: false,
    resetpin: false,
    resetpinsuccess: false,
  },
  reset2fa: {
    resettwofaform: false,
    resettwofaverification: false,
    resettwofapass: false,
    resettwofapin: false,
    resettwofabcode: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.register = {
        ...state.register,
        ...action.payload,
      };
    },
    signin: (state, action) => {
      state.signin = {
        ...state.signin,
        ...action.payload,
      };
    },
    resetpass: (state, action) => {
      state.resetpass = {
        ...state.resetpass,
        ...action.payload,
      };
    },
    resetpin: (state, action) => {
      state.resetpin = {
        ...state.resetpin,
        ...action.payload,
      };
    },
    reset2fa: (state, action) => {
      state.reset2fa = {
        ...state.reset2fa,
        ...action.payload,
      };
    },
    logout: (state) => {
      state.register = initialState.register;
      state.signin = initialState.signin;
    },
  },
});

export const { register, signin, resetpass, resetpin, reset2fa, logout } =
  authSlice.actions;
export default authSlice.reducer;
