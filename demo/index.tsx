import React from "react";
import ReactDOM from "react-dom";
import { FlexImagesContainer, FlexImagesItem } from "../src/index";
import data from "./data";

function App() {
  return (
    <div>
      <FlexImagesContainer>
        {data.map((url, idx) => (
          <FlexImagesItem key={idx} imgUrl={url} />
        ))}
      </FlexImagesContainer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
