import ReactDOM from "react-dom";
import { FlexImagesContainer, FlexImagesItem } from "../src/index";
import data from "./data";

function App() {
  return (
    <div>
      <FlexImagesContainer>
        {data.map((imageInfo, idx) => (
          <FlexImagesItem key={idx} imgUrl={imageInfo.url} imgWidth={imageInfo.width} imgHeight={imageInfo.height} />
        ))}
      </FlexImagesContainer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
