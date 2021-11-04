import React from "react";
import useSWR from "swr";

const urFetcher = (url: string) =>
  fetch(url + "?api_key=" + import.meta.env.VITE_UR_KEY, {
    method: "POST",
  }).then((r) => r.json());

function Circle({ children, className }: any) {
  return (
    <span className="relative mr-3">
      <span
        className={`absolute ${className} inset-0 -m-2 rounded-full -z-10`}
      />
      <span className="z-10">{children}</span>
    </span>
  );
}

function UptimeData({ monitors }: any) {
  const down = monitors.filter((m: any) => m.status !== 2);

  if (down.length) {
    return (
      <p className="text-center">
        <Circle className="bg-red-500">{down.length}</Circle>
        monitors down, incl. {down[0].friendly_name}
      </p>
    );
  } else {
    return (
      <p className="text-center">
        <Circle className="bg-green-300">{monitors.length}</Circle> monitors up.
      </p>
    );
  }
}

export default function Uptime() {
  const { data, error } = useSWR(
    "https://api.uptimerobot.com/v2/getMonitors",
    urFetcher
  );

  return (
    <div className="border-2 border-black rounded-3xl p-6 text-xl flex justify-center items-center">
      {data ? (
        <UptimeData {...data} />
      ) : (
        <p className="text-center">failed to load</p>
      )}
    </div>
  );
}
