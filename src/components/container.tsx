import React, { useState, useEffect } from "react";
import flexImages from "../flex-images";

interface Props {
  children?: React.ReactNode;
  rowHeight?: number;
}

export default function FlexImagesContainer(props: Props) {
  const rowHeight = props.rowHeight || 300;

  useEffect(() => {
    setTimeout(() => {
      flexImages({ selector: ".flex-images", rowHeight });
    }, 100);

    setTimeout(() => {
      flexImages({ selector: ".flex-images", rowHeight });
    }, 5000);
  });

  return <div className="flex-images">{props.children}</div>;
}
