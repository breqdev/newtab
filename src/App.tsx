import React from "react";
import Clock from "./Clock";
import Greeting from "./Greeting";
import Subway from "./Subway";
import Uptime from "./Uptime";
import Weather from "./Weather";

function App() {
  return (
    <div className="w-screen h-screen grid place-items-start md:place-items-center p-4">
      <div className="grid w-full max-w-4xl grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <Clock />
        <Greeting />
        <Weather />
        <Uptime />
        <Subway />
      </div>
    </div>
  );
}

export default App;
