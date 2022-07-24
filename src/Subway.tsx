import React from "react";
import useSWR from "swr";

const mbtaFetcher = (url: string) => fetch(url).then((r) => r.json());

const timeToArrival = (prediction: any) =>
  Math.floor(
    (new Date(prediction.attributes.arrival_time).getTime() - Date.now()) /
      1000 /
      60
  );

export default function Subway() {
  const { data, error } = useSWR(
    "https://api-v3.mbta.com/predictions?filter[stop]=place-masta&filter[route]=Orange&filter[direction_id]=1&include=stop&sort=arrival_time&page[limit]=5",
    mbtaFetcher,
    {
      refreshInterval: 10000,
    }
  );

  let departureList;

  if (data?.data) {
    departureList =
      " " +
      data.data
        .map(timeToArrival)
        .filter((t: number) => t >= 0)
        .slice(0, 3)
        .join(",\xA0") +
      "\xA0m.";
  } else {
    departureList = " no\xA0service.";
  }

  return (
    <div className="border-2 border-black dark:border-white rounded-3xl py-6 px-2 text-lg flex justify-center items-center">
      {data ? (
        <p className="text-center">
          <span
            className="-m-2 p-2 rounded-full mr-1 leading-8 text-white dark:text-black"
            style={{ backgroundColor: "#ed8b00" }}
          >
            Mass Ave
          </span>
          {departureList}
        </p>
      ) : (
        <p className="text-center">failed to load</p>
      )}
    </div>
  );
}
