import React from "react";
import useSWR from "swr";

const owmFetcher = (url: string) =>
  fetch(url + "&appid=" + import.meta.env.VITE_WEATHER_KEY).then((r) =>
    r.json()
  );

export default function Weather() {
  const { data, error } = useSWR(
    "https://api.openweathermap.org/data/2.5/weather?zip=02120,us&units=imperial",
    owmFetcher
  );

  return (
    <div className="border-2 border-black col-span-2 rounded-xl  overflow-hidden">
      {data ? (
        <div className="flex">
          <div className="bg-gray-400 p-8">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            />
          </div>
          <div className="flex flex-col p-8">
            <span className="text-7xl">{Math.round(data.main.temp)}° F</span>
            <span className="text-2xl">{data.weather[0].description}</span>
          </div>
        </div>
      ) : (
        <p className=" text-center">failed to load weather data</p>
      )}
    </div>
  );
}
