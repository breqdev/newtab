import React from "react";
import Clock from "./Clock";
import Greeting from "./Greeting";

function App() {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="grid grid-cols-3 gap-8">
        <Clock />
        <Greeting />
      </div>
    </div>
  );
}

export default App;
