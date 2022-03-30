import React from "react";

export interface FlexImagesContext {

  /**
   * Orientation of layout.
   * @default horizontal
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Gap between lines.
   */
  lineGap?: string;
}

const FlexImagesContext = React.createContext<FlexImagesContext | null>(null);

export default FlexImagesContext;