import React from "react";

function greetings() {
  const date = new Date();
  const hours = date.getHours();

  if (hours < 1) {
    return ["Good night", "Sleep tight"];
  } else if (hours < 6) {
    return ["Burn the midnight oil", "Get some rest"];
  } else if (hours < 12) {
    return ["Good morning", "Rise and shine"];
  } else if (hours < 18) {
    return ["Good afternoon", "Time to focus"];
  } else if (hours < 23) {
    return ["Good evening", "Time to focus"];
  } else {
    return ["Good night", "Sleep tight"];
  }
}

function GreetingPhrase({ name }: { name: string }) {
  const [phrases, setPhrases] = React.useState(greetings());
  const [index, setIndex] = React.useState(0);
  const [fading, setFading] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPhrases(greetings());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((index) => (index + 1) % phrases.length);
        setFading(false);
      }, 1000);
    }, 10000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <span
      className={
        (fading ? "opacity-0" : "opacity-100") +
        " transition-opacity duration-700 lowercase"
      }
    >
      {phrases[index]}, <span className="text-pink-500">{name}</span>.
    </span>
  );
}

export default function Greeting({ name }: { name: string }) {
  return (
    <div className="border-2 border-black dark:border-white rounded-3xl md:col-span-2 p-2 md:p-8 flex items-center">
      <p className="text-3xl md:text-4xl w-full text-center md:text-left">
        <GreetingPhrase name={name} />
      </p>
    </div>
  );
}
