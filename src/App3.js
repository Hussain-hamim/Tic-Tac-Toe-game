import { useState, useRef } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const textRef = useRef(null);

  function handleChange(e) {
    setText(e.target.value);
    textRef.current = e.target.value;
  }

  function handleSend() {
    setTimeout(() => {
      alert("Sending: " + textRef.current);
    }, 5000);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={handleSend}>Send</button>
    </>
  );
}

/** State works like a snapshot, so you can’t read the latest
 *  state from an asynchronous operation like a timeout.
 *  However, you can keep the latest input text in a ref.
 *  A ref is mutable, so you can read the current
 * property at any time. */
