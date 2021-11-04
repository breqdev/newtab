import React from "react";

function greetings() {
  const date = new Date();
  const hours = date.getHours();

  if (hours < 4) {
    return ["Burn the midnight oil", "Get some rest"];
  } else if (hours < 12) {
    return ["Good morning", "Rise and shine"];
  } else if (hours < 18) {
    return ["Good afternoon", "Time to focus"];
  } else if (hours < 22) {
    return ["Good evening", "Time to relax"];
  } else {
    return ["Good night", "Sleep tight"];
  }
}

function GreetingPhrase() {
  const [phrases, setPhrases] = React.useState(greetings());
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPhrases(greetings());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % phrases.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return <span>{phrases[index]}</span>;
}

export default function Greeting() {
  return (
    <div className="border-2 border-black rounded-3xl md:col-span-2 p-2 md:p-8 flex items-center">
      <p className="text-3xl md:text-4xl text-center md:text-left">
        <GreetingPhrase />, <span className="text-pink-500">Brooke</span>.
      </p>
    </div>
  );
}
