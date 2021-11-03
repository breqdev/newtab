import React from "react";
import Clock from "./Clock";
import Greeting from "./Greeting";
import Weather from "./Weather";

function App() {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="grid grid-cols-3 gap-8">
        <Clock />
        <Greeting />
        <Weather />
      </div>
    </div>
  );
}

export default App;
