import React, { useState, useEffect } from "react";

const Timer = () => {
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setDuration((prevDuration) => prevDuration + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p className="text-xl lg:text-4xl">Timer: {duration} seconds</p>;
};

export default React.memo(Timer);
