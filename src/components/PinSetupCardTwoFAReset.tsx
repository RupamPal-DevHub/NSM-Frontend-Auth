import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { Eye, EyeClosed } from "lucide-react"; // Visibility icons
import { useNavigate } from "react-router-dom";

const PinSetupCardTwoFAReset = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState(Array(6).fill(""));
  const [showPin, setShowPin] = useState(false);

  const handlePinChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    state: string[]
  ) => {
    const { value } = e.target;
    const lastChar = value.slice(-1); // Restrict to a single digit
    if (!/^\d$/.test(lastChar) && lastChar !== "") return; // Ensure it's a number

    const newPin = [...state];
    newPin[index] = lastChar; // Update the current input
    setState(newPin);

    // Move to the next input if input is valid
    if (lastChar !== "" && index < state.length - 1) {
      const nextInput = document.getElementById(
        `${e.target.id.split("-")[0]}-${index + 1}`
      );
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number,
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    state: string[]
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newPin = [...state];
      newPin[index] = "";
      setState(newPin);

      if (index > 0) {
        const prevInput = document.getElementById(
          `${(e.target as HTMLInputElement).id.split("-")[0]}-${index - 1}`
        );
        if (prevInput) (prevInput as HTMLInputElement).focus();
      }
    }
  };

  const handleConfirm = () => {
    const pinValue: string = pin.join("");
    if (pinValue.length === 6) {
      navigate("/resettwofabcode");

      console.log(
        "Pin Setup Failed! please use same pin in both fields and make sure it's 6 digits long."
      );
    }
  };

  const renderPinInputs = (
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    isPassword: boolean,
    idPrefix: string
  ) =>
    state.map((value, index) => (
      <div key={index} className="relative">
        <input
          id={`${idPrefix}-${index}`}
          type={isPassword ? "password" : "text"}
          value={value}
          onChange={(e) => handlePinChange(e, index, setState, state)}
          onKeyDown={(e) => handleKeyDown(e, index, setState, state)}
          maxLength={1}
          className="w-10 h-10 sm:w-12 sm:h-12  text-center text-xs md:text-xl bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    ));

  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-white p-2 w-[400px]">
        {/* Header */}

        <p className="my-4 font-bold text-2xl">Verification</p>

        <div className="space-y-3">
          {/* Setup PIN */}
          <div>
            <label className="font-bold text-xs">Enter 6 DIGIT PIN</label>
            <div className="flex items-center justify-around gap-1 relative">
              {renderPinInputs(pin, setPin, !showPin, "pin")}

              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="relative"
              >
                {showPin ? <EyeClosed size={24} /> : <Eye size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full  mt-4 py-4 text-white bg-maintheme rounded-xl text-lg font-bold cursor-pointer"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PinSetupCardTwoFAReset;
