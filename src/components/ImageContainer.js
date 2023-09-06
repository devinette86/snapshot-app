import React from "react";
import SingleImage from "./SingleImage";

export default function ImageContainer({ inputValue, photos, keyword }) {
  let filteredData = [];

  if (keyword !== "") {
    filteredData = photos.filter((photo) => photo.keywords.match(keyword));
  } else if (inputValue !== "") {
    filteredData = photos.filter((photo) => photo.keywords.match(inputValue));
  } else {
    filteredData = photos.slice(0, 60);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        {filteredData.map((photo, index) => {
          return <SingleImage key={index} photo={photo} />;
        })}
      </div>
    </>
  );
}
