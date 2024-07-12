import { useState } from "react";
import first from "./hamim2.jpg";
import second from "./hhamim.jpg";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  console.log(hasNext);

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      <img key={index} alt=".." src={image.src} width={200} />
      <p>{image.place}</p>
    </>
  );
}

let images = [
  {
    place: "Penang, Malaysia",
    src: first,
  },
  {
    place: "Lisbon, Portugal",
    src: second,
  },
  {
    place: "Bilbao, Spain",
    src: first,
  },
  {
    place: "Valparaíso, Chile",
    src: second,
  },
  {
    place: "Schwyz, Switzerland",
    src: first,
  },
  {
    place: "Prague, Czechia",
    src: second,
  },
  {
    place: "Ljubljana, Slovenia",
    src: first,
  },
];
