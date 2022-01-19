import React from "react";
import Clock from "./Clock";
import Greeting from "./Greeting";
import Subway from "./Subway";
import Uptime from "./Uptime";
import Wallpaper from "./Wallpaper";
import Weather from "./Weather";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center gap-4 md:gap-8 px-4 py-8 md:py-16 dark:bg-black dark:text-white">
      <div className="grid xl:grid-flow-col w-full max-w-4xl xl:max-w-7xl grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8">
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
