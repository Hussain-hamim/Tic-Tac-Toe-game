import { useEffect, useState } from "react";

function ChatRoom({ roomId, createConnection }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    connection.on("message", (receivedMessage) => {
      setMessages((msg) => [...msg, receivedMessage]);
    });
    return () => connection.disconnect();
  }, [roomId]); // ✅ All dependencies declared
  return <h1>Welcome to the {roomId} room!</h1>;
}
