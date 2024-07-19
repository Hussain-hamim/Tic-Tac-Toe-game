import React, { useEffect } from "react";
import { createConnection } from "./chat2";

const App3 = () => {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();

    // cleanup fn
    return () => {
      connection.disconnect();
    };
  }, []);

  return <div>welcome to the chat</div>;
};

export default App3;
