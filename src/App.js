import { useState } from "react";
import { useCounter } from "./useCounter";

export default function Counter() {
  const [delay, setDelay] = useState(1000);
  const count = useCounter(delay);

  return (
    <>
      <label>
        Tick Duration: {delay} ms
        <br />
        <input
          type="range"
          value={delay}
          min={10}
          max={2000}
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </label>

      <hr />
      <h1>Seconds passed: {count}</h1>
    </>
  );
}
