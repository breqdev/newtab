import React from "react";

function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}

interface TimezoneClockProps {
  timezone: string;
  friendlyName: string;
}

function TimezoneClock({ timezone, friendlyName }: TimezoneClockProps) {
  const time = useTime();

  const timeInZone = new Date(
    time.toLocaleString("en-US", {
      timeZone: timezone,
    })
  );

  return (
    <div className="font-mono text-lg flex flex-col">
      <span>
        {timeInZone.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        })}
      </span>
      <span className="text-gray-500 -mt-0.5">{friendlyName}</span>
    </div>
  );
}

export default function Clock() {
  const time = useTime();

  const zones: TimezoneClockProps[] = [
    {
      timezone: "UTC",
      friendlyName: "UTC",
    },
    {
      timezone: "America/New_York",
      friendlyName: "NYC",
    },
    {
      timezone: "America/Los_Angeles",
      friendlyName: "SFO",
    },
    {
      timezone: "Asia/Shanghai",
      friendlyName: "PEK",
    },
  ];

  return (
    <div className="row-span-2 text-center border-2 border-black dark:border-white rounded-3xl p-4 md:p-8">
      <div className="w-full h-full max-w-sm mx-auto flex md:flex-col">
        <div className="flex flex-col self-center">
          <span className="text-xl">
            {time.toLocaleString(undefined, { weekday: "long" })}
          </span>
          <span className="text-5xl md:text-7xl mb-1">
            {time.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hourCycle: "h23",
            })}
          </span>
          <span className="text-3xl">{time.toLocaleDateString()}</span>
        </div>
        <div className="grid-cols-2 gap-2 pt-4 -mb-1 hidden xl:grid">
          {zones.map((zone) => (
            <TimezoneClock key={zone.timezone} {...zone} />
          ))}
        </div>
      </div>
    </div>
  );
}
