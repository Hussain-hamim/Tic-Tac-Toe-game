import { useState } from "react";

/**Pitfall
This is why you should not nest component function definitions. */

export default function MyComponent() {
  const [counter, setCounter] = useState(0);

  function MyTextField() {
    const [text, setText] = useState("");

    return (
      <>
        <p>text: {text}</p>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </>
    );
  }

  return (
    <>
      <MyTextField />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Clicked {counter} times
      </button>
    </>
  );
}

/** always declare component functions at the top level,
 *  and don’t nest their definitions. */
