import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FlexImagesContainer, FlexImagesItem } from "../src/index";
import data from "./data";

interface ImageInfo {
  url: string;
  width: number;
  height: number;
}

function App() {
  const [images, setImages] = useState<ImageInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const loadImagesSize = () => {
    setLoading(true);
    const tasks = data.map(
      (url) =>
        new Promise((resolve: (obj: ImageInfo) => void, reject) => {
          const img = new Image();
          img.onload = () => {
            resolve({
              url,
              width: img.naturalWidth,
              height: img.naturalHeight,
            });
          };
          img.src = url;
        })
    );

    Promise.all(tasks)
      .then((imageInfos) => {
        console.log(imageInfos);
        setImages(imageInfos);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadImagesSize();
  }, []);

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <FlexImagesContainer>
          {images.map((imageInfo, idx) => (
            <FlexImagesItem key={idx} imgUrl={imageInfo.url} imgWidth={imageInfo.width} imgHeight={imageInfo.height} />
          ))}
        </FlexImagesContainer>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
