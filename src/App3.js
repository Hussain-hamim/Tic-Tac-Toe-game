import { forwardRef, useRef } from "react";

export default function Page() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <>
      <nav>
        <SearchButton clickfn={handleClick} />
      </nav>
      <SearchInput ref={ref} />
    </>
  );
}

function SearchButton({ clickfn }) {
  return <button onClick={clickfn}>Search</button>;
}

const SearchInput = forwardRef(function SearchInput(props, ref) {
  return <input ref={ref} />;
});
