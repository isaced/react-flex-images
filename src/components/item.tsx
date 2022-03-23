import React, { useState, useEffect } from "react";

interface Props {
  imgUrl: string;
}

export default function FlexImagesItem(props: Props) {
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  return (
    <div className="item" data-w={imgWidth} data-h={imgHeight}>
      <img
        src={props.imgUrl}
        onLoad={(e: any) => {
          const w = e.target.naturalWidth;
          const h = e.target.naturalHeight;
          setImgWidth(w);
          setImgHeight(h);
        }}
      />
    </div>
  );
}
