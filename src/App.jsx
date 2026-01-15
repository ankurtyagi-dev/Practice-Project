import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import DATA from "./DATA.js";

function App() {
  return (
    <>
      <Player />
      {/* <TimerChallenge title="Easy" targetTime={1} />
      <TimerChallenge title="Not Easy" targetTime={5} />
      <TimerChallenge title="Getting Tough" targetTime={10} />
      <TimerChallenge title="Pros Only" targetTime={15} /> */}
      {DATA.map((challenge, index) => (
        <TimerChallenge
          key={index}
          title={challenge.title}
          targetTime={challenge.targetTime}
        />
      ))}
    </>
  );
}

export default App;
