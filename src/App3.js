import { useState, useRef, useEffect } from "react";
import second from "./quran.mp4";

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("Calling video.play()");
      ref.current.play();
    } else {
      console.log("Calling video.pause()");
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video width={"200px"} ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <br />
      <br />
      <VideoPlayer isPlaying={isPlaying} src={second} />
    </>
  );
}
