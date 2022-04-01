import React,{useState,useEffect} from 'react';

export default function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <div>
      <div>This is s Stopwatch</div>
      <div className="timer">
        <span className="digits">
          {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {('0' + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec">
          {('0' + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePauseResume}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
