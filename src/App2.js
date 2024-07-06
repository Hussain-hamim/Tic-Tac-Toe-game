import { useState } from "react";
export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  console.log(position.x, position.y);

  return (
    <div
      onPointerMove={(e) => {
        // direct mutation is not fine
        // position.x = e.clientX;
        // position.y = e.clientY;

        // however local mutation is fine
        // const obj = {}
        // obj.x = e.clientX
        // obj.y = e.clientY

        setPosition({ x: e.clientX, y: e.clientY });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
