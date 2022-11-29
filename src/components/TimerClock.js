import React, { useEffect, useState } from "react";

const TimerClock = ({ clock }) => {
  const [clockTime, setClock] = useState(clock);

  let k = (1 / clock) * 100; // 1 unit decresre every Sec

  const [progressBartime, setProgressBar] = useState(100);

  const [textColor, setClor] = useState("green");

  useEffect(() => {
    setClock(clock);
    setProgressBar(100);

    if (clockTime < 10) {
      setClor("red");
    } else {
      setClor("green");
    }
  }, [clock]);

  useEffect(() => {
    let stop;

    if (clockTime === 0) {
      setClock("⚠️");
    }

    if (clockTime > 0) {
      if (clockTime < 10) {
        setClor("red");
      }

      stop = setInterval(() => {
        setClock((clockTime) => clockTime - 1);
        setProgressBar((progressBartime) => progressBartime - k);
      }, 1000);
    }

    return () => clearInterval(stop);
  }, [clockTime]);

  const progressScale = {
    width: progressBartime,
    ariaValuenow: "50",
    ariaValuemin: "0",
    ariaValuemax: "100",
    fontWeight: "600",
  };

  return (
    <>
      {Math.floor(progressBartime) <= 0 ? (
        "⚠️"
      ) : (
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={progressScale}>
            {Math.floor(progressBartime)}%
          </div>
        </div>
      )}
    </>
  );
};

export default TimerClock;
