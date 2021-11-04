import React from "react";
import Clock from "./Clock";
import Greeting from "./Greeting";
import Subway from "./Subway";
import Uptime from "./Uptime";
import Wallpaper from "./Wallpaper";
import Weather from "./Weather";

function App() {
  return (
    <div className="w-screen min-h-screen grid place-items-start md:place-items-center p-4">
      <div className="grid xl:grid-flow-col w-full max-w-6xl grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8">
        <Clock />
        <Greeting />
        <Weather />
        <Uptime />
        <Subway />
        <Wallpaper />
      </div>
    </div>
  );
}

export default App;
