import { useState, useRef } from "react";
import second from "./quran.mp4";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (!isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <hr />
      <video
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        controls
        ref={ref}
        width="250"
      >
        <source src={second} type="video/mp4" />
      </video>
    </>
  );
}
