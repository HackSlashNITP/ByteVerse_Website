"use client";
// countdownUI.js
import React from "react";
import Countdown from "./countdown";

const CountdownUI = () => {
  const targetDate = "2024-04-13T12:00:00";

  return (
    <div className="flex-col items-center justify-center">
      <h1 className="text-white text-center font-semibold text-2xl mt-2 md:mt-4 md:text-[2.75rem] tracking-wide font-japanese opacity-85">
        COUNTDOWN
      </h1>
      <Countdown targetDate={targetDate} />
    </div>
  );
};

export default CountdownUI;
