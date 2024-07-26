import { useEffect, useState, useEffectEvent } from "react";

function ChatRoom({ roomId, createConnection, onReceivedMessages }) {
  const [messages, setMessages] = useState([]);
  const [isMuted, setIsMuted] = useState(false);

  function playSound() {
    ////...
  }

  const onMessage = useEffectEvent((receivedMessage) => {
    setMessages((msgs) => [...msgs, receivedMessage]);
    if (!isMuted) {
      playSound();
    }
  });

  const onMessaging = useEffectEvent((receivedMsg) => {
    onReceivedMessages(receivedMsg); // event handler props
  });

  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    connection.on("message", (receivedMessage) => {
      onMessage(receivedMessage);
      onMessaging(receivedMessage);
    });
    return () => connection.disconnect();
  }, [createConnection, onMessage, roomId]); // ✅ All dependencies declared
  // ...

  return <h1>Welcome to the {roomId} room!</h1>;
}
