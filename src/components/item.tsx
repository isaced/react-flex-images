import React from "react";

interface Props {
  imgUrl: string;
  imgWidth: number;
  imgHeight: number;
  style?: React.CSSProperties;
  coverStyle?: React.CSSProperties;
  className?: string;
}

export default function FlexImagesItem(props: Props) {
  const { className, style, coverStyle } = props;

  return (
    <div className={"flex-images-item" + (className ? ` ${className}` : "")} style={{ ...style, ...coverStyle }}>
      <img src={props.imgUrl} />
    </div>
  );
}
