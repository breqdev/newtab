import React from "react";
import useSWR from "swr";

const owmFetcher = (url: string) =>
  fetch(url + "&appid=" + import.meta.env.VITE_WEATHER_KEY).then((r) =>
    r.json()
  );

export default function Weather({ zip }: { zip: string }) {
  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial`,
    owmFetcher
  );

  return (
    <div className="border-2 border-black dark:border-white rounded-3xl overflow-hidden md:row-span-2 xl:row-span-1">
      {data && (
        <div className="flex flex-col h-full">
          <div className="flex flex-row gap-6 items-center">
            <div className="bg-gray-400 p-1 xl:w-20 xl:h-20 rounded-br-2xl">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              />
            </div>
            <div className="text-6xl xl:text-4xl pr-4">
              {Math.round(data.main.temp)}° F
            </div>
          </div>
          <p className="pb-2 px-2 text-center text-lg md:text-2xl xl:text-xl flex-grow grid place-content-center">
            {data.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}
