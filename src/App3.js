import React, { useEffect } from "react";
import { createConnection } from "./chat2";

const App3 = () => {
  useEffect(() => {
    function handleScroll(e) {
      console.log(window.scrollX, window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div>welcome to the chat</div>;
};

export default App3;
