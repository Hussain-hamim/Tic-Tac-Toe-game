import { useState } from "react";

let initCounters = [0, 0, 0];

export default function CounterList() {
  const [counters, setCounters] = useState(initCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // increment the clicked counter
        return c + 1;
      } else {
        // the rest haven't changed
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <ul>
      {counters.map((counter, index) => (
        <li key={index}>
          {counter}

          <button onClick={() => handleIncrementClick(index)}>+1</button>
        </li>
      ))}
    </ul>
  );
}
