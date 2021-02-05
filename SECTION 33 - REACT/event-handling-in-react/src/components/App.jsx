import React, { useState } from "react";

function App() {
  const [backgroundColor, setbackgorundColor] = useState("white");
  function handleClick() {
    setbackgorundColor("black");
  }
  function handleOver() {
    setbackgorundColor("white");
  }

  const styles = {
    backgroundColor: backgroundColor
  };

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={styles} onMouseOver={handleClick} onMouseOut={handleOver}>
        Submit
      </button>
    </div>
  );
}

export default App;
