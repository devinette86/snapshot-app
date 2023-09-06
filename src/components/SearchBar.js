import React from "react";
import { useRef } from "react";

export default function SearchBar({ inputValue, setInputValue }) {
  const inputRef = useRef();

  console.log(inputValue);
  return (
    <div>
      <input type="text" name="search" ref={inputRef} />
      <button onClick={() => setInputValue(inputRef.current.value)}>
        search
      </button>
    </div>
  );
}
