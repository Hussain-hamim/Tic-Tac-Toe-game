import React, { useEffect } from "react";
import { createConnection } from "./chat2";

const App3 = () => {
  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const json = await fetchTodos(userId);
      if (!ignore) {
        setTodos(json);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, []);

  return <div>welcome to the chat</div>;
};

export default App3;
