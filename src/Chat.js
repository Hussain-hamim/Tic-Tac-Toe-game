import React, { useState } from "react";

const Chat = ({ contact }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        placeholder={"chat to " + contact.name}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button>send to {contact.email}</button>
    </div>
  );
};

export default Chat;
