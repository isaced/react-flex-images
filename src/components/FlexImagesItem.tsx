import React, { useContext } from "react";
import FlexImagesContext from "./FlexImagesContext";

interface Props {
  /**
   * The url of the image item.
   */
  imgUrl: string;

  /**
   * The width of the image.
   */
  imgWidth?: number;

  /**
   * The height of the image.
   */
  imgHeight?: number;

  /**
   * Item style.
   */
  style?: React.CSSProperties;

  /**
   * The class name of the image item.
   */
  className?: string;
}

/**
 * react-flex-images item.
 */
export default function FlexImagesItem(props: Props) {
  const { className, style } = props;
  const contextConfig = useContext(FlexImagesContext);
  const { orientation, lineGap } = contextConfig || {};
  const baseClassName = orientation === "horizontal" ? "flex-images-item" : "flex-images-vertical-item";
  return (
    <div className={baseClassName + (className ? ` ${className}` : "")} style={{ ...style, marginBottom: lineGap }}>
      <img src={props.imgUrl} />
    </div>
  );
}
