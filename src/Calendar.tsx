import React from "react";
import useSWR from "swr";
import { OAuth2Client } from "google-auth-library";

async function fetcher([url, key, setKey]: [
  string,
  string,
  (s: string) => void
]) {
  if (!key) {
    const auth = new OAuth2Client(
      import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
      import.meta.env.VITE_GOOGLE_CLIENT_SECRET as string,
      import.meta.env.VITE_GOOGLE_REDIRECT_URI as string
    );

    const authorizeUrl = auth.generateAuthUrl({
      access_type: "offline",
      scope: "https://www.googleapis.com/auth/calendar.readonly",
    });
  }

  return fetch("https://www.googleapis.com/calendar/v3" + url, {
    headers: {
      Authorization: "Bearer " + key,
    },
  }).then((resp) => resp.json());
}

function Event() {
  return (
    <div className="border-2 border-black rounded-3xl p-6 w-full min-w-0 flex flex-col gap-2">
      <div className="text-2xl truncate">
        CS 2810 - Mathematics of Data Models
      </div>
      <div className="text-4xl truncate">
        10:45 <span className="text-gray-600">@</span> Behrakis 010
      </div>
    </div>
  );
}

export default function Calendar() {
  const [token, setToken] = React.useState("");

  const { data, error } = useSWR(
    ["/calendars/primary/events?maxResults=1", token, setToken],
    fetcher
  );

  return (
    <div className="flex w-full max-w-4xl xl:max-w-7xl gap-8">
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <Event key={i} />
        ))}
    </div>
  );
}
