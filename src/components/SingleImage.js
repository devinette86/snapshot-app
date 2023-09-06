import React from "react";

export default function SingleImage({ photo }) {
  return (
    <>
      <h1
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {photo?.symbol}
      </h1>
    </>
  );
}
