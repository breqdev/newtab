import React from "react";
import useSWR from "swr";
import tinycolor from "tinycolor2";

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
    },
  }).then((r) => r.json());

export default function Wallpaper() {
  const { data, error, mutate } = useSWR(
    "https://api.unsplash.com/photos/random?topics=bo8jQKTaE0Y,rnSKDHwwYUk,xHxYTMHLgOc",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      errorRetryInterval: 30000,
    }
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (document.hasFocus()) {
        mutate();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const whiteCaption = data && tinycolor(data.color).getBrightness() < 128;

  return (
    <div className="md:col-span-3 xl:row-span-3 xl:col-span-2 border-2 border-black rounded-xl h-full max-h-96 xl:max-h-full overflow-hidden">
      {data ? (
        <div className="w-full h-full relative">
          <img
            className="object-cover w-full h-full"
            src={data.urls.regular}
            alt={data.alt_description}
          />
          <p
            className={`absolute right-0 bottom-0 m-4 rounded-full px-2 py-1 md:text-base text-sm ${
              whiteCaption ? "text-white bg-black" : "text-black bg-white"
            }`}
          >
            photo by {data.user.username} on unsplash
          </p>
        </div>
      ) : (
        <p className="text-center p-4">wallpaper failed to load</p>
      )}
    </div>
  );
}
