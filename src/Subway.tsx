import React from "react";
import useSWR from "swr";

const mbtaFetcher = (url: string) => fetch(url).then((r) => r.json());

const timeToArrival = (prediction: any) =>
  Math.floor(
    (new Date(prediction.attributes.arrival_time).getTime() - Date.now()) /
      1000 /
      60
  );

function usePrediction(place: string, route: string, direction: number) {
  const { data } = useSWR(
    `https://api-v3.mbta.com/predictions?filter[stop]=${place}&filter[route]=${route}&filter[direction_id]=${direction}&include=stop&sort=arrival_time&page[limit]=10&api_key=${
      import.meta.env.VITE_MBTA_KEY
    }`,
    mbtaFetcher,
    {
      refreshInterval: 10000,
    }
  );

  if (!data) {
    return "loading...";
  }

  if (data?.data && data?.data.length) {
    return (
      " " +
      data.data
        .map(timeToArrival)
        .filter((t: number) => t >= 0)
        .slice(0, 3)
        .join(",\xA0") +
      "\xA0m."
    );
  } else {
    console.log(data);
    return " no\xA0service";
  }
}

function Prediction({
  place,
  route,
  direction,
  label,
  color,
}: {
  place: string;
  route: string;
  direction: number;
  label: string;
  color: string;
}) {
  const departureList = usePrediction(place, route, direction);

  return (
    <p className="flex flex-col text-center gap-1">
      <span
        className="p-1 rounded-full text-white dark:text-black"
        style={{ backgroundColor: color }}
      >
        {label}
      </span>
      {departureList}
    </p>
  );
}

export default function Subway() {
  /**
   * View stop names at e.g.
   * https://api-v3.mbta.com/stops?filter[route]=Orange
   */
  return (
    <div className="border-2 border-black dark:border-white rounded-3xl p-6 text-lg grid grid-cols-3 md:col-span-2 gap-x-4 gap-y-2">
      <Prediction
        label="Magoun Sq"
        place="place-mgngl"
        route="Green-E"
        direction={0}
        color="#00843d"
      />
      <Prediction
        label="Hynes"
        place="place-hymnl"
        route="Green-B,Green-C,Green-D"
        direction={1}
        color="#00843d"
      />
      <Prediction
        label="Northeastern"
        place="place-nuniv"
        route="Green-E"
        direction={1}
        color="#00843d"
      />
      <Prediction
        label="Sullivan"
        place="place-sull"
        route="Orange"
        direction={0}
        color="#ed8b00"
      />
      <Prediction
        label="Broadway"
        place="2698"
        route="89"
        direction={1}
        color="#494F5C"
      />
      <Prediction
        label="529 Main St"
        place="12821"
        route="92,93"
        direction={1}
        color="#494F5C"
      />
    </div>
  );
}
