import React from "react";
import useSWR from "swr";

const urFetcher = (url: string) =>
  fetch(url + "?api_key=" + import.meta.env.VITE_UR_KEY, {
    method: "POST",
  }).then((r) => r.json());

function Circle({ children, className }: any) {
  return (
    <div className="relative w-6 h-6 flex justify-center items-center flex-shrink-0">
      <span className={`absolute ${className} inset-0 -m-2 rounded-full`} />
      <span className="z-10 text-black">{children}</span>
    </div>
  );
}

function UptimeData({ monitors }: any) {
  const down = monitors.filter((m: any) => m.status !== 2);

  if (down.length) {
    return (
      <div className="text-center flex gap-3 items-center">
        <Circle className="bg-red-500">{down.length}</Circle>
        monitors down, incl. {down[0].friendly_name}
      </div>
    );
  } else {
    return (
      <div className="text-center flex gap-4 items-center">
        <Circle className="bg-green-300">{monitors.length}</Circle> monitors up.
      </div>
    );
  }
}

export default function Uptime() {
  const { data, error } = useSWR(
    "https://api.uptimerobot.com/v2/getMonitors",
    urFetcher
  );

  return (
    <div className="border-2 border-black dark:border-white rounded-3xl p-6 text-xl flex justify-center items-center">
      {data ? (
        <UptimeData {...data} />
      ) : (
        <p className="text-center">failed to load</p>
      )}
    </div>
  );
}
