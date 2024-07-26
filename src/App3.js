import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

function ChatRoom({ getOptions }) {
  const [message, setMessage] = useState("");

  const { roomId, serverUrl } = getOptions();

  /**This only works for pure functions because they are safe to call
   *  during rendering. If your function is an event handler,
   *  but you don’t want its changes to re-synchronize your Effect,
   *  wrap it into an Effect Event instead. */

  useEffect(() => {
    const connection = createConnection({
      roomId: roomId,
      serverUrl: serverUrl,
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState("general");
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}
