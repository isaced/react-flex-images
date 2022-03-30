import React from "react";
import { FlexImagesHorizontalContainer, FlexImagesHorizontalContainerProps } from "./FlexImagesHorizontalContainer";
import { FlexImagesVerticalContainer, FlexImagesVerticalContainerProps } from "./FlexImagesVerticalContainer";
import FlexImagesContext from "./FlexImagesContext";

type FlexImagesPublicProps = {
  /**
   * items
   */
  children?: React.ReactNode;

  /**
   * Orientation of layout.
   * @default horizontal
   */
  orientation?: "horizontal" | "vertical";
};

type FlexImagesProps = FlexImagesPublicProps & FlexImagesHorizontalContainerProps & FlexImagesVerticalContainerProps;

/**
 * react-flex-images container.
 *
 * Examle:
 *    <FlexImagesContainer>
 *        <FlexImagesItem imgUrl={...} imgWidth={...} imgHeight={...} />
 *    </FlexImagesContainer>
 */
export default function FlexImagesContainer(props: FlexImagesProps) {
  const { children, orientation = "horizontal", lineGap } = props;

  return (
    <FlexImagesContext.Provider value={{ orientation, lineGap }}>
      {orientation === "horizontal" ? (
        <FlexImagesHorizontalContainer {...props}>{children}</FlexImagesHorizontalContainer>
      ) : (
        <FlexImagesVerticalContainer {...props}>{children}</FlexImagesVerticalContainer>
      )}
    </FlexImagesContext.Provider>
  );
}
