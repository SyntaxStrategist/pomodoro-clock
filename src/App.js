import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [timerLabel, setTimerLabel] = useState("Session");
  const [isRunning, setIsRunning] = useState(false);

  // Update timeLeft whenever session length changes
  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  // Update timer countdown
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerLabel(timerLabel === "Session" ? "Break" : "Session");
      setTimeLeft((timerLabel === "Session" ? breakLength : sessionLength) * 60);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, breakLength, sessionLength, timerLabel]);

  const handleStartStop = () => setIsRunning(!isRunning);

  const handleReset = () => {
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setTimerLabel("Session");
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div id="pomodoro-clock">
      <h1>25 + 5 Clock</h1>
      <div id="control-panel">
        <div id="break-controls">
          <h2 id="break-label">Break Length</h2>
          <button id="break-decrement" onClick={() => setBreakLength(prev => Math.max(1, prev - 1))}>-</button>
          <span id="break-length">{breakLength}</span>
          <button id="break-increment" onClick={() => setBreakLength(prev => Math.min(60, prev + 1))}>+</button>
        </div>
        <div id="session-controls">
          <h2 id="session-label">Session Length</h2>
          <button id="session-decrement" onClick={() => setSessionLength(prev => Math.max(1, prev - 1))}>-</button>
          <span id="session-length">{sessionLength}</span>
          <button id="session-increment" onClick={() => setSessionLength(prev => Math.min(60, prev + 1))}>+</button>
        </div>
      </div>
      <div id="display">
        <h2 id="timer-label">{timerLabel}</h2>
        <div id="time-left">{formatTime(timeLeft)}</div>
      </div>
      <div id="controls">
        <button id="start_stop" onClick={handleStartStop}>{isRunning ? "Pause" : "Start"}</button>
        <button id="reset" onClick={handleReset}>Reset</button>
      </div>
      <audio id="beep" src="beep-sound-url"></audio>
    </div>
  );
}

export default Clock;
