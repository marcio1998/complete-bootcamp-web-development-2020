import React, { useState } from "react";

function App() {
  let times = new Date().toLocaleTimeString();
  const [time, setTime] = useState(times);
  console.log(time);

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  //setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
