import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleName(event) {
    const { value, name } = event.target;
    setFullName((prevValues) => {
      if (name === "fName") {
        return {
          fName: value,
          lname: prevValues.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValues.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input name="fName" onChange={handleName} placeholder="First Name" />
        <input name="lName" onChange={handleName} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
