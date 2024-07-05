import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          // this is (n) => n + 1 an updater fn
          // setNumber((n) => n + 1);

          setNumber(number + 5);
          setNumber((n) => n + 1);

          // setNumber((n) => n + 1);
          // setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
