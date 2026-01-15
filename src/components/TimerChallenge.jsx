import { useState } from "react";

function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  let timer;

  function handleStart() {
    timer = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={timerStarted ? handleStop : handleStart}>
        {timerStarted ? "Stop" : "Start"} Challenge
      </button>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Time inactive"}
      </p>
    </section>
  );
}

export default TimerChallenge;
