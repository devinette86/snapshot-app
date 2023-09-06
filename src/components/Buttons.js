import React, { useRef } from "react";

export default function Buttons({ setKeyword }) {
  const happyButtonRef = useRef();
  const sadButtonRef = useRef();
  const angryButtonRef = useRef();
  const loveButtonRef = useRef();

  const handleButtonClick = (keyword) => {
    setKeyword(keyword);
  };

  return (
    <div>
      <button
        ref={happyButtonRef}
        onClick={() => handleButtonClick("happy")}
        style={{ margin: "5px" }}
      >
        Happy
      </button>
      <button
        ref={sadButtonRef}
        onClick={() => handleButtonClick("sad")}
        style={{ margin: "5px" }}
      >
        Sad
      </button>
      <button
        ref={angryButtonRef}
        onClick={() => handleButtonClick("angry")}
        style={{ margin: "5px" }}
      >
        Angry
      </button>
      <button
        ref={loveButtonRef}
        onClick={() => handleButtonClick("love")}
        style={{ margin: "5px" }}
      >
        Love
      </button>
    </div>
  );
}
