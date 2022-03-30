import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FlexImagesContainer, FlexImagesItem } from "../src/index";
import data from "./data";

function App() {
  const [orientation, setOrientation] = useState("horizontal");

  const h = () => {
    return (
      <FlexImagesContainer orientation="horizontal">
        {data.map((imageInfo, idx) => (
          <FlexImagesItem key={idx} imgUrl={imageInfo.url} imgWidth={imageInfo.width} imgHeight={imageInfo.height} />
        ))}
      </FlexImagesContainer>
    );
  };

  const v = () => {
    return (
      <FlexImagesContainer orientation="vertical" columnGap="10px" lineGap="10px">
        {data.map((imageInfo, idx) => (
          <FlexImagesItem key={idx} imgUrl={imageInfo.url} />
        ))}
      </FlexImagesContainer>
    );
  };

  return (
    <div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        {["horizontal", "vertical"].map((o) => {
          return (
            <>
              <input
                type="radio"
                name="orientation"
                onChange={() => {
                  setOrientation(o);
                }}
              />
              <label>{o}</label>
            </>
          );
        })}
      </div>

      <div>{orientation === "horizontal" ? h() : v()}</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
