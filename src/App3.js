import { useRef, useState } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  let timeoutID = useRef(null);

  function handleSend() {
    setIsSending(true);
    timeoutID.current = setTimeout(() => {
      alert("sent!");
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID.current);
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSend} disabled={isSending}>
        {isSending ? "Sending..." : "Send"}
      </button>

      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  );
}
