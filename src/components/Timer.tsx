import { useState, useEffect } from "react";

export default function Timer() {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const START_DATE = Date.now();

  useEffect(() => {
    const interval = setInterval(() => updateTimer(), 1000);
    return () => clearInterval(interval);
  }, []);

  const updateTimer = () => {
    const time = Date.now() - START_DATE;
    setHours(Math.floor(time / (1000 * 60 * 60)));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  function getTimer() {
    return `${hours ? `${hours}:` : ""} ${minutes}:${seconds}`;
  }

  return <div className="timer">{getTimer()}</div>;
}
