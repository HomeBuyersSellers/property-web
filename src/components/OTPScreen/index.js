import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const OTPScreen = ({ sentTo }) => {
  const initialRemaining = 120;
  const [remaining, setRemaining] = useState(initialRemaining);
  const [timerOn, setTimerOn] = useState(true);
  const [otp, setOTP] = useState(["", "", "", ""]);

  useEffect(() => {
    if (remaining >= 0 && timerOn) {
      const timerId = setTimeout(() => {
        setRemaining(remaining - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    }

    if (!timerOn) {
      // Do validation stuff here
      return;
    }

    setTimerOn(false);
    alert("Timeout for otp");
  }, [remaining, timerOn]);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  const resetTimer = () => {
    setRemaining(initialRemaining);
    setTimerOn(true);
  };

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const updatedOTP = [...otp];
      updatedOTP[index] = value;
      setOTP(updatedOTP);
    }
  };
  return (
    <div class="flex flex-col space-y-4 mb-2">
      <p className="text-sm text-center font-medium">
        Please enter code sent to{" "}
        <span className="text-primary-color">{sentTo}</span>
      </p>
      <div class="flex  items-center justify-center mx-auto w-full max-w-xs space-x-3">
        {otp.map((digit, index) => (
          <div class="w-10 h-10 ">
            <input
              key={index}
              className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-md border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-primary-color"
              type="text"
              onChange={(e) => handleChange(index, e.target.value)}
              value={digit}
              id=""
            />
          </div>
        ))}
      </div>
      <div className="code-resend">
        {timerOn && (
          <p className="text-sm font-gray-600 text-center font-normal mb-0">
            Time Left: {formattedMinutes}:{formattedSeconds}
          </p>
        )}
        <p className="mb-1 text-sm text-center font-medium">
          Didn't receive code?{" "}
          <span
            className="cursor-pointer text-primary-color"
            onClick={resetTimer}
          >
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default OTPScreen;
