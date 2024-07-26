import { useEffect } from "react";
import { createConnection } from "./chat.js";

export default function ChatRoom({ options }) {
  const { serverUrl, roomId } = options;

  useEffect(() => {
    const connection = createConnection({
      serverUrl: serverUrl,
      roomId: roomId,
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return <h1>Welcome to the {options.roomId} room!</h1>;
}
