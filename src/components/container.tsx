import React, { useEffect } from "react";
import flexImages from "../flex-images";

interface FlexImagesProps {
  /**
   * items
   */
  children?: React.ReactNode;

  /**
   * Maximum height of a row. Default is `300`.
   */
  rowHeight?: number;

  /**
   * Maximum number of rows to display. Images/Objects exceeding this row are hidden. Default is `null`.
   */
  maxRows?: number;

  /**
   * Hide incomplete last row of images/objects. Default is `false`.
   */
  truncate?: boolean;
}

/**
 * react-flex-images container.
 */
export default function FlexImagesContainer(props: FlexImagesProps) {
  const { rowHeight = 300, maxRows = null, truncate = false } = props;

  useEffect(() => {
    setTimeout(() => {
      layout();
    }, 100);

    setTimeout(() => {
      layout();
    }, 5000);
  });

  const layout = () => {
    flexImages({ selector: ".flex-images", rowHeight, maxRows, truncate });
  };

  return <div className="flex-images">{props.children}</div>;
}
