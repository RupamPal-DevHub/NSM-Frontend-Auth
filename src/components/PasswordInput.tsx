import React, { useState, useEffect, ChangeEvent } from "react";
import { Eye, EyeClosed } from "lucide-react";

interface PasswordInputProps {
  onPasswordChange: (data: {
    password: string;
    confirmPassword: string;
  }) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ onPasswordChange }) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [allValid, setAllValid] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    if (password === "" || allValid) setIsFocused(false);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    onPasswordChange({ password: value, confirmPassword });
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    onPasswordChange({ password, confirmPassword: value });
  };

  const validations = [
    {
      rule: password.length >= 8 && password.length <= 20,
      text: "8 to 20 Characters",
    },
    {
      rule: /^[a-z]/.test(password) && /[a-z]$/.test(password),
      text: "First and Last Letter Should Be Small",
    },
    { rule: /\d/.test(password), text: "At Least One Number" },
    { rule: /[A-Z]/.test(password), text: "At Least One Capital Letter" },
    {
      rule: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      text: "At Least One Special Character",
    },
  ];

  const passwordsMatch = password === confirmPassword;

  useEffect(() => {
    const allRulesSatisfied = validations.every(
      (validation) => validation.rule
    );
    setAllValid(allRulesSatisfied);

    if (allRulesSatisfied && !isFocused) {
      setIsFocused(false);
    }
  }, [password, isFocused]);

  return (
    <div className="relative">
      {/* Password Field */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Password"
          className="my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs"
          value={password}
          onChange={handlePasswordChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        >
          {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
        </span>
      </div>

      {/* Confirm Password Field */}
      <div className="relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmpassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          className={`my-2 w-full py-4 px-3 rounded-xl border font-semibold from-stone-900 bg-light-gray border-light-gray focus:outline-cyan text-xs ${
            passwordsMatch ? "border-light-gray" : "border-red-500"
          } focus:outline-cyan`}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <span
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        >
          {showConfirmPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
        </span>
      </div>

      {!passwordsMatch && confirmPassword.length > 0 && (
        <p className="text-red-500 text-sm">Passwords do not match</p>
      )}

      {/* Validation Box */}
      {isFocused && !allValid && (
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border border-light-gray rounded-md shadow-lg p-4 sm:w-[90%]">
          <p className="text-sm text-dark-navy font-medium mb-2">
            Password Must Include:
          </p>
          <ul className="list-none space-y-2">
            {validations.map((validation, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 text-sm ${
                  validation.rule ? "text-green-500" : "text-red-500"
                }`}
              >
                <span className="w-4 h-4 flex items-center justify-center rounded-full">
                  {validation.rule ? "✓" : "✗"}
                </span>
                {validation.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
