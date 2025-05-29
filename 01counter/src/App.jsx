import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    setCounter((prevCounter) => {
      if (prevCounter >= 20) {
        return 20;
      }
      return prevCounter + 1;
    });
  };

  const removeValue = () => {
    setCounter((prevCounter) => {
      if (prevCounter <= 0) {
        return 0;
      }
      return prevCounter - 1;
    });
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter} </button>
      <br />
      <button onClick={removeValue}>Remove value {counter} </button>

      <p></p>
    </>
  );
}

export default App;
