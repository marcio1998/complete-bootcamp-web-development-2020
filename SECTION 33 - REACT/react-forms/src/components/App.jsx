import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
