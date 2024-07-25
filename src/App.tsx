import React from "react";
import Clock from "./Clock";
import Greeting from "./Greeting";
import Subway from "./Subway";
import Uptime from "./Uptime";
import Wallpaper from "./Wallpaper";
import Weather from "./Weather";
import Launcher from "./Launcher";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4 md:gap-8 px-4 py-8 md:py-16 dark:bg-black dark:text-white">
      <div className="grid xl:grid-flow-col w-full max-w-2xl xl:max-w-7xl grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 md:gap-8">
        <Clock />
        <Weather />
        <Greeting />
        {/* <Uptime /> */}
        <Subway />
        <Launcher />
        <Wallpaper />
      </div>
    </div>
  );
}

export default App;
