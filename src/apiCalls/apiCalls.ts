//api routes

import axios from "axios";

//const API_BASE_URL = process.env.VITE_SERVER_DOMAIN;

const API_BASE_URL = "http://localhost:5000";


export const registerCaptcha = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/auth/captcha/register`
  );
   console.log(response);
   
  return response.data;
};

export const registerBase = async (formData: {
  email: string;
  password: string;
  confirmpassword: string;
  phone: string;
  countryCode: string;
  captcha: string;
}) => {
  console.log(formData);
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/register`,
    formData
  );
  console.log(response.data);
  return response.data;
};

export const registerVerifyOtp = async (formData: {
  emailOtp: number;
  phoneOtp: number;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}auth/register/verify-otp`,
    formData
  );
  return response.data;
};

export const registerCreatePin = async (formData: { pin: string }) => {
  const response = await axios.post(
    `${API_BASE_URL}auth/register/create-pin`,
    formData
  );
  return response.data;
};

export const loginCaptcha = async () => {
  const response = await axios.get(`${API_BASE_URL}auth/captcha/login`);
  return response.data;
};

export const loginBase = async (formData: {
  email: string;
  password: string;
  captcha: string;
}) => {
  const response = await axios.post(`${API_BASE_URL}auth/login`, formData);
  return response.data;
};

export const loginVerifyOtp = async (formData: {
  emailOtp: number;
  phoneOtp: number;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}auth/login/verify-otp`,
    formData
  );
  return response.data;
};

export const loginVerifyPin = async (formData: { pin: string }) => {
  const response = await axios.post(
    `${API_BASE_URL}auth/login/verify-pin`,
    formData
  );
  return response.data;
};

export const loginVerify2fa = async (formData: { twoFAcode: string }) => {
  const response = await axios.post(
    `${API_BASE_URL}auth/login/verify-2fa`,
    formData
  );
  return response.data;
};

// CAPTCHA for forgot password
export const forgotPasswordCaptcha = async () => {
  const response = await axios.get(
    `${API_BASE_URL}auth/captcha/forgot_password`
  );
  return response.data;
};

// Forgot password - request reset
export const forgotPasswordRequest = async (formData: {
  email: string;
  captcha: string;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}reset/forgot-password`,
    formData
  );
  return response.data;
};

// Forgot password - verify OTP
export const verifyForgotPasswordOtp = async (formData: {
  emailOtp: number;
  phoneOtp: number;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}reset/verify-reset-password-otp`,
    formData
  );
  return response.data;
};

// Forgot password - reset password
export const resetPassword = async (formData: {
  newPassword: string;
  confirmpassword: string;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}reset/reset-password`,
    formData
  );
  return response.data;
};

// Confirm password reset
export const confirmPasswordReset = async (token: string) => {
  const response = await axios.get(
    `${API_BASE_URL}reset/confirm-password-reset/${token}`
  );
  return response.data;
};

// CAPTCHA for reset PIN
export const resetPinCaptcha = async () => {
  const response = await axios.get(`${API_BASE_URL}auth/captcha/reset_pin`);
  return response.data;
};

// Forgot PIN - request reset
export const forgotPinRequest = async (formData: {
  email: string;
  captcha: string;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}reset/forgot-pin`,
    formData
  );
  return response.data;
};

// Forgot PIN - verify password
export const verifyForgotPinPassword = async (formData: {
  password: string;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}reset/forgot-pin/verify-password`,
    formData
  );
  return response.data;
};

// Forgot PIN - verify OTP
export const verifyForgotPinOtp = async (formData: {
  emailOtp: number;
  phoneOtp: number;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}reset/forgot-pin/verify-otp`,
    formData
  );
  return response.data;
};

// Forgot PIN - set new PIN
export const setForgotPin = async (formData: {
  pin: string;
  confirmPin: string;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}reset/forgot-pin/set-pin`,
    formData
  );
  return response.data;
};
