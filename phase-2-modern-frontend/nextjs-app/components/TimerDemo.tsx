"use client";

import { useEffect, useState } from "react";

export default function TimerDemo() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section>
      <h2>Timer</h2>
      <p>Seconds: {seconds}</p>
    </section>
  );
}