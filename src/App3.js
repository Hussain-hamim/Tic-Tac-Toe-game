import React, { useState } from "react";
import second from "./logo192.png";

const App3 = () => {
  const [isActive, setIsActive] = useState(false);

  let bgClassName = "background";
  let picClassName = "picture";

  if (isActive) {
    picClassName += " pic--active";
  } else {
    bgClassName += "bg--active";
  }

  return (
    <div className={bgClassName} onClick={() => setIsActive(false)}>
      <img
        className={picClassName}
        onClick={(e) => {
          setIsActive(true);
          e.stopPropagation();
        }}
        src={second}
        alt="a pic"
      />
    </div>
  );
};

export default App3;
