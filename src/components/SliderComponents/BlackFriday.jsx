import React, { useEffect, useState } from "react";
import { formatPrice } from "../ChangeNumbers";
import "../CostumStyle.css";

export default function BlackFriday() {
  const targetDate = new Date("2024-12-25T10:25:30");
  const [timerleft, setTimerleft] = useState(calculateTimeLeft(targetDate));

  function calculateTimeLeft(targetDate) {
    const now = new Date().getTime();
    const diffrence = targetDate - now;
    if (diffrence <= 0) {
      return { hour: "00", min: "00", seconds: "00" };
    }
    const hour = Math.floor((diffrence / (1000 * 60 * 60)) % 24);
    const min = Math.floor((diffrence / (1000 * 60)) % 60);
    const seconds = Math.floor((diffrence / 1000) % 60);

    return {
      hour: String(hour).padStart(2, "0"),
      min: String(min).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setTimerleft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <div
      style={{
        height: "60px",
        width: "100%",
        backgroundColor: "#231f20",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <picture>
          <img
            src="/Images/blackfriday/blackfriday-1403-desktop.png"
            style={{ objectFit: "cover", height: "100%", width: "150px" }}
          />
        </picture>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="div-timer"
      >
        <span className="span-seconds">{formatPrice(timerleft.seconds)}</span>
        <span className="span-seprator">:</span>
        <span className="span-min">{formatPrice(timerleft.min)}</span>
        <span className="span-seprator">:</span>
        <span className="span-hour">{formatPrice(timerleft.hour)}</span>
      </div>
    </div>
  );
}
