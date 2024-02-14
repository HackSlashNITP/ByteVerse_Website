// Countdown.jsx
import React, { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2024-04-13T00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center mt-4">
      <div className="flex flex-col items-center mx-1 md:mx-3 p-2 md:p-4 rounded-lg bg-[#500d0dc3] border border-white  shadow-lg md:shadow-xl shadow-[#2c1313]">
        <span
          className=" text-2xl md:text-4xl font-bold"
          suppressHydrationWarning
        >
          {timeLeft.days}
        </span>
        <span className="text-base md:text-lg">Days</span>
      </div>
      <div className="flex flex-col items-center mx-1 md:mx-3 p-2 md:p-4 rounded-lg bg-[#500d0dc3] border border-white  shadow-lg md:shadow-xl shadow-[#2c1313]">
        <span
          className="text-2xl md:text-4xl font-bold"
          suppressHydrationWarning
        >
          {timeLeft.hours}
        </span>
        <span className="text-base md:text-lg">Hours</span>
      </div>
      <div className="flex flex-col items-center mx-1 md:mx-3 p-2 md:p-4 rounded-lg bg-[#500d0dc3] border border-white shadow-lg md:shadow-xl shadow-[#2c1313]">
        <span
          className="text-2xl md:text-4xl font-bold"
          suppressHydrationWarning
        >
          {timeLeft.minutes}
        </span>
        <span className="text-base md:text-lg">Minutes</span>
      </div>
      <div className="flex flex-col items-center mx-1 md:mx-3 p-2 md:p-4 rounded-lg bg-[#500d0dc3] border border-white  shadow-lg md:shadow-xl shadow-[#2c1313]">
        <span
          className="text-2xl md:text-4xl font-bold"
          suppressHydrationWarning
        >
          {timeLeft.seconds}
        </span>
        <span className="text-base md:text-lg">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
