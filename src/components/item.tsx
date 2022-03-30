import React from "react";

interface Props {
  /**
   * The url of the image item.
   */
  imgUrl: string;

  /**
   * The width of the image.
   */
  imgWidth: number;

  /**
   * The height of the image.
   */
  imgHeight: number;

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

  return (
    <div className={"flex-images-item" + (className ? ` ${className}` : "")} style={style}>
      <img src={props.imgUrl} />
    </div>
  );
}
