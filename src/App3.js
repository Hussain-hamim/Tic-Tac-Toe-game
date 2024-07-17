import { useRef } from "react";
import one from "./hamim2.jpg";
import two from "./hamim2.jpg";
import three from "./hhamim.jpg";

export default function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>Tom</button>
        <button onClick={handleScrollToSecondCat}>Maru</button>
        <button onClick={handleScrollToThirdCat}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              width="50%"
              height="400px"
              src={one}
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              width="50%"
              height="400px"
              src={two}
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              width="50%"
              height="400px"
              src={three}
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
          <li>
            <img
              width="50%"
              height="400px"
              src={three}
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
          <li>
            <img
              width="50%"
              height="400px"
              src={three}
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
          <li>
            <img
              width="50%"
              height="400px"
              src={three}
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
