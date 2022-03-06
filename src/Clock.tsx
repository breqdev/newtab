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

  const offset =
    Math.round((timeInZone.getTime() - time.getTime()) / 3600000) -
    Math.round(time.getTimezoneOffset() / 60);

  const offsetPadding = offset == 0 ? "\xA0" : offset > 0 ? "+" : "";

  return (
    <tr className="font-mono text-lg text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300">
      <td>{friendlyName}</td>
      <td className="px-3">{offsetPadding + offset}</td>
      <td>
        {timeInZone.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        })}
      </td>
    </tr>
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
      friendlyName: "LAX",
    },
    {
      timezone: "Europe/Berlin",
      friendlyName: "BER",
    },
    {
      timezone: "Europe/London",
      friendlyName: "LHR",
    },
    {
      timezone: "Europe/Kiev",
      friendlyName: "KBP",
    },
    {
      timezone: "Asia/Shanghai",
      friendlyName: "PEK",
    },
  ];

  return (
    <div className="row-span-3 flex md:flex-col text-center border-2 border-black dark:border-white rounded-3xl p-4 md:p-8">
      <div className="flex flex-col self-center">
        <span className="text-5xl md:text-7xl mb-1">
          {time.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })}
        </span>
        <span className="text-3xl">{time.toLocaleDateString()}</span>
      </div>
      <div className="flex-grow grid items-center" />
      <table>
        <tbody>
          {zones.map((zone) => (
            <TimezoneClock key={zone.timezone} {...zone} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
