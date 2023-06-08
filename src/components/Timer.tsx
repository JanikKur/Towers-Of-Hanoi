import { useState, useEffect } from "react";

export default function Timer({ running = true }: { running?: boolean }) {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const START_DATE = Date.now();

  useEffect(() => {
    if (!running) {
      return;
    }
    const interval = setInterval(() => updateTimer(), 1000);
    return () => clearInterval(interval);
  }, [running]);

  const updateTimer = () => {
    const time = Date.now() - START_DATE;
    setHours(Math.floor(time / (1000 * 60 * 60)));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  function getTimer() {
    let hours_formatted = (hours + "").padStart(2, "0");
    let minutes_formatted = (minutes + "").padStart(2, "0");
    let seconds_formatted = (seconds + "").padStart(2, "0");
    return `${
      hours ? `${hours_formatted}:` : ""
    } ${minutes_formatted}:${seconds_formatted}`;
  }

  return <div className="timer">{getTimer()}</div>;
}
