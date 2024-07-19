import React, { useEffect, useRef, useState } from "react";

const App3 = () => {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <MyInput value={text} onChange={handleChange} />
    </div>
  );
};

export default App3;

const MyInput = ({ value, onChange }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div>
      <input ref={ref} value={value} onChange={onChange} />
    </div>
  );
};
