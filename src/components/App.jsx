import React, { useState } from "react";

function App() {
  let temp = "";
  const [name, setNewVal] = useState("");
  function setName(event) {
    temp = event.target.value;
  }
  function onBtnClick(event) {
    console.log(temp);
    setNewVal(temp);
    event.preventDefault();
  }
  return (
    <div className="container">
      <form>
        <h1>Hello {name}</h1>
        <input onChange={setName} type="text" placeholder="What's your name?" />
        <button onClick={onBtnClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
