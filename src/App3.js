import React, { useState } from "react";

const App3 = () => {
  const [lastCord, setLastCord] = useState(null);
  const [initPos, setInitPos] = useState({ x: 0, y: 0 });

  function handlePointerDown(e) {
    e.target.setPointerCapture(e.pointerId);

    setLastCord({
      x: e.clientX,
      y: e.clientY,
    });
    console.log(e.clientX);
  }

  function handlePointerMove(e) {
    if (lastCord) {
      setLastCord({
        x: e.clientX,
        y: e.clientY,
      });

      const dx = e.clientX - lastCord.x;
      const dy = e.clientY - lastCord.y;

      setInitPos({ x: initPos.x + dx, y: initPos.y + dy });
    }
  }

  function handlePointerUp(e) {
    setLastCord(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          cursor: "grab",
          position: "absolute",
          backgroundColor: "yellowgreen",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: `translate(${initPos.x}px, ${initPos.y}px)`,
        }}
      >
        drag me
      </div>
    </div>
  );
};

export default App3;
