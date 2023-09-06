import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ImageContainer from "./components/ImageContainer";
import SearchBar from "./components/SearchBar";
import Buttons from "./components/Buttons";

function App() {
  const [photos, setPhotos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [keyword, setKeyword] = useState("");

  async function getData() {
    try {
      const response = await fetch("emoji.json");
      if (response.ok === true) {
        const data = await response.json();
        setPhotos(data);
      } else {
        let error = new Error("");
        throw error;
      }
    } catch (error) {}
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <h1>Snap Shot</h1>
        <SearchBar
          photos={photos}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Buttons setKeyword={setKeyword} />
        <ImageContainer
          photos={photos}
          inputValue={inputValue}
          keyword={keyword}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
