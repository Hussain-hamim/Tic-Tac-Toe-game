import { forwardRef, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "orchid";
  }

  return (
    <>
      <MyInput ref={inputRef} />
      {/* <input type="text" ref={inputRef} /> */}
      <button onClick={handleClick}>Focus the input</button>

      {/* <HisInput ref={inputRef} /> */}
    </>
  );
}

const HisInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
