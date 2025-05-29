import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App(props) {
  const [count, setCount] = useState(0);

  let myObj = {
    userName: "Arzoo",
    age: 22,
  };
  return (
    <>
      <h1 className="bg-purple-400 text-black p-4 rounded-4xl mb-4">
        Tailwind css
      </h1>
      <Card username="Mikey" />
      <Card />
    </>
  );
}

export default App;
