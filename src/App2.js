import { useState } from "react";

export default function FeedbackForm() {
  // const [name, setName] = useState("");

  // Within a single event handler,
  // a regular variable will do fine
  // no need for state
  function handleClick() {
    const name = prompt("What is your name?");
    alert(`Hello, ${name}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}
