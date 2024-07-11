import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <Input text={text} onUpdate={handleChange} label="First input" />
      <Input label="Second input" text={text} onUpdate={handleChange} />
    </>
  );
}

function Input({ label, text, onUpdate }) {
  return (
    <>
      <label>
        {label} <input value={text} onChange={onUpdate} />
      </label>
      <br />
    </>
  );
}
