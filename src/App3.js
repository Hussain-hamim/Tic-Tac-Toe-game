import React, { useEffect, useRef, useState } from "react";
import second from "./quran.mp4";

const App3 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer isPlaying={isPlaying} src={second} />
    </div>
  );
};
export default App3;

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  //wrap the side effect with useEffect to move it out of
  // the rendering calculation
  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  // TODO: do something here
  return <video width={"200px"} ref={ref} src={src} />;
}
