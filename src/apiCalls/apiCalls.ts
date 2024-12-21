import axios from "axios";

//const API_BASE_URL = process.env.VITE_SERVER_DOMAIN;
const API_BASE_URL = "http://localhost:5000";

// -----------------------------------Register API Calls-----------------------------------

export const registerCaptcha = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/auth/captcha/register`,
      {
        withCredentials: true,
      }
    );
    console.log(document.cookie);

    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error(`HTTP error! status: ${error.response?.status}`, error);
    throw error;
  }
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
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

export const registerVerifyOtp = async (formData: {
  emailOtp: number;
  phoneOtp: number;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/register/verify-otp`,
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

export const registerCreatePin = async (formData: {
  pin: string;
  confirmPin: string;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/register/create-pin`,
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return response.data;
};

// -----------------------------------Login API Calls-----------------------------------

export const loginCaptcha = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/auth/captcha/login`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const loginBase = async (formData: {
  email: string;
  password: string;
  captcha: string;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/login`,
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return response.data;
};

export const loginVerifyOtp = async (formData: {
  emailOtp: number;
  phoneOtp: number;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/login/verify-otp`,
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return response.data;
};

export const loginVerifyPin = async (formData: { pin: string }) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/login/verify-pin`,
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return response.data;
};

export const loginVerify2fa = async (formData: { twoFAcode: string }) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/login/verify-2fa`,
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return response.data;
};

// -----------------------------------Forget Password API Calls-----------------------------------

export const forgotPasswordCaptcha = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/auth/captcha/forgot_password`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const forgotPasswordRequest = async (formData: {
  email: string;
  captcha: string;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/reset/forgot-password`,
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return response.data;
};

export const verifyForgotPasswordOtp = async (formData: {
  emailOtp: number;
  phoneOtp: number;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/reset/verify-reset-password-otp`,
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return response.data;
};

export const resetPassword = async (formData: {
  newPassword: string;
  confirmpassword: string;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/reset/reset-password`,
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

export const confirmPasswordReset = async (token: string) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/reset/confirm-password-reset/${token}`
  );
  return response.data;
};

// -----------------------------------Reset Pin API Calls-----------------------------------

export const resetPinCaptcha = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/auth/captcha/reset_pin`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const forgotPinRequest = async (formData: {
  email: string;
  captcha: string;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/reset/forgot-pin`,
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return response.data;
};

export const verifyForgotPinPassword = async (formData: {
  password: string;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/reset/forgot-pin/verify-password`,
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return response.data;
};

export const verifyForgotPinOtp = async (formData: {
  emailOtp: number;
  phoneOtp: number;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/reset/forgot-pin/verify-otp`,
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return response.data;
};

export const setForgotPin = async (formData: {
  pin: string;
  confirmPin: string;
}) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/reset/forgot-pin/set-pin`,
    JSON.stringify(formData),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return response.data;
};
