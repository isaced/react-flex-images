import React, { useContext } from "react";
import FlexImagesContext from "./FlexImagesContext";

interface FlexImagesItemProps {
  /**
   * items
   */
  children?: React.ReactNode;

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

  /**
   * The onClick event of the image item.
   */
  onClick?: React.MouseEventHandler | undefined;
}

/**
 * react-flex-images item.
 */
export default function FlexImagesItem(props: FlexImagesItemProps) {
  const { children, className, style, onClick } = props;
  const contextConfig = useContext(FlexImagesContext);
  const { orientation, lineGap } = contextConfig || {};
  const baseClassName = orientation === "horizontal" ? "flex-images-item" : "flex-images-vertical-item";
  return (
    <div
      className={baseClassName + (className ? ` ${className}` : "")}
      style={{ ...style, marginBottom: lineGap }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
