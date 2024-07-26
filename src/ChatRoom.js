import { useEffect, useState, useEffectEvent } from "react";

function ChatRoom({ roomId, createConnection }) {
  const [messages, setMessages] = useState([]);
  const [isMuted, setIsMuted] = useState(false);

  function playSound() {
    ////...
  }

  /** Effect Events let you split an Effect into reactive parts
   *  (which should “react” to reactive values like roomId
   * and their changes) and non-reactive parts
   * (which only read their latest values,
   * like onMessage reads isMuted).
   *  Now that you read isMuted inside an Effect Event,
   * it doesn’t need to be a dependency of your Effect */

  const onMessage = useEffectEvent((receivedMessage) => {
    setMessages((msgs) => [...msgs, receivedMessage]);
    if (!isMuted) {
      playSound();
    }
  });

  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    connection.on("message", (receivedMessage) => {
      onMessage(receivedMessage);
    });
    return () => connection.disconnect();
  }, [roomId]); // ✅ All dependencies declared
  // ...

  return <h1>Welcome to the {roomId} room!</h1>;
}
