import React from "react";

interface FlexImagesVerticalContainerProps {
  /**
   * items
   */
  children?: React.ReactNode;

  /**
   * Column number.
   * @default "3"
   */
  columnCount?: string;

  /**
   * Gap between columns.
   * @default "20px"
   */
  columnGap?: string;

  /**
   * Gap between lines.
   */
  lineGap?: string;
}

/**
 * react-flex-images vertical container.
 *
 * Examle:
 *    <FlexImagesVerticalContainer>
 *        <FlexImagesItem imgUrl={...} />
 *    </FlexImagesVerticalContainer>
 */
function FlexImagesVerticalContainer(props: FlexImagesVerticalContainerProps) {
  const { children, columnCount = "3", columnGap = "20px" } = props;
  return (
    <div className="flex-images-vertical" style={{ columnCount, columnGap }}>
      {children}
    </div>
  );
}

export { type FlexImagesVerticalContainerProps, FlexImagesVerticalContainer };
