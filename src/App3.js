import React, { useEffect, useRef, useState } from "react";

const App3 = () => {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <MyInput shouldFocus={!focus} value={text} onChange={handleChange} />
      <MyInput shouldFocus={focus} value={text} onChange={handleChange} />
      <button onClick={() => setFocus(true)}>Focus</button>
    </div>
  );
};
export default App3;

const MyInput = ({ shouldFocus, value, onChange }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (shouldFocus) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return (
    <div>
      <input ref={ref} value={value} onChange={onChange} />
    </div>
  );
};
