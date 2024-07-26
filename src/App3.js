import { useState, useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";
import { createConnection, sendMessage } from "./chat.js";
import { showNotification } from "./notifications.js";

const serverUrl = "https://localhost:1234";
const roomId = "travel";

function ChatRoom({ theme }) {
  const onConnected = useEffectEvent((connectedRoomId) => {
    showNotification("Welcome to " + connectedRoomId, theme);
  });

  /** The last part is important. If you want to change the dependencies,
   * change the surrounding code first. You can think of the
   *  dependency list as a list of all the reactive values
   * used by your Effect’s code. You don’t choose what to
   *  put on that list. The list describes your code.
   *  To change the dependency list, change the code. */

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    let notificationTimeoutId;
    connection.on("connected", () => {
      notificationTimeoutId = setTimeout(() => {
        onConnected(roomId);
      }, 2000);
    });
    connection.connect();
    return () => {
      connection.disconnect();
      if (notificationTimeoutId !== undefined) {
        clearTimeout(notificationTimeoutId);
      }
    };
  }, []);

  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [isDark, setIsDark] = useState(false);
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
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom roomId={roomId} theme={isDark ? "dark" : "light"} />
    </>
  );
}
