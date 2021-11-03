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
    "https://api-v3.mbta.com/predictions?filter[stop]=place-rugg&filter[route]=Orange&filter[direction_id]=1&include=stop&sort=arrival_time&page[limit]=5",
    mbtaFetcher,
    {
      refreshInterval: 10000,
    }
  );

  return (
    <div className="border-2 border-black rounded-xl p-8">
      {data ? (
        <span>
          <span
            className="-m-2 p-2 rounded-full mr-1"
            style={{ backgroundColor: "#ed8b00" }}
          >
            Ruggles:
          </span>
          {" " + data.data.slice(0, 3).map(timeToArrival).join(", ") + " "}min.
        </span>
      ) : (
        <p>failed to load</p>
      )}
    </div>
  );
}
