import React, { useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
import FlexImagesItem from "./item";

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
 * Wrap FlexImagesItem
 */
interface ChildrenWrap {
  child: React.ReactNode;
  imgWidth: number;
  imgHeight: number;
  width: number;
  height: number;
}

/**
 * react-flex-images container.
 *
 * Examle:
 *    <FlexImagesContainer>
 *        <FlexImagesItem imgUrl={...} imgWidth={...} imgHeight={...} />
 *    </FlexImagesContainer>
 */
export default function FlexImagesContainer(props: FlexImagesProps) {
  const { rowHeight = 300, maxRows = null, truncate = false } = props;
  const selfRef = useRef<HTMLInputElement | null>(null);
  const [, forceRender] = useReducer((s) => s + 1, 0);
  const [rerender, setRerender] = useState(false);

  // Calculate after first layout
  useLayoutEffect(forceRender, []);

  // Window resizing requires layout recalculation
  useEffect(() => {
    const resizeListener = () => {
      forceRender();
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  // Get child element margins
  const getChildMargin = () => {
    const el = selfRef.current?.querySelector(".flex-images-item");
    if (el) {
      const style = getComputedStyle(el);
      return (
        parseFloat(style.marginLeft) +
        parseFloat(style.marginRight) +
        Math.round(parseFloat(style.borderLeftWidth)) +
        Math.round(parseFloat(style.borderRightWidth))
      );
    }
    return 0;
  };

  // Mesure children size
  const calc = (children: React.ReactNode) => {
    if (!selfRef.current) return;

    let rowIndex = 1;
    let curRowWidth = 0;
    let rowItems: ChildrenWrap[] = [];
    const maxWidth = selfRef.current.clientWidth - 2;
    let displayItems: ChildrenWrap[] = [];
    const childMargin = getChildMargin();

    // Wrap children list
    let childrenWrapList = React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return;
      const { imgWidth, imgHeight } = child.props;
      return { child, imgWidth, imgHeight, width: 0, height: 0 } as ChildrenWrap;
    });

    // Calculate children width and height
    childrenWrapList?.forEach((childWrap) => {
      // Check maxRows
      if (maxRows && rowIndex > maxRows) {
        return false;
      }

      rowItems.push(childWrap);
      childWrap.width = childWrap.imgWidth * (rowHeight / childWrap.imgHeight); // 按定高比例缩放宽度
      childWrap.height = rowHeight;
      curRowWidth += childWrap.width + childMargin;

      if (curRowWidth > maxWidth) {
        const marginInRow = childMargin * rowItems.length;

        // Calculate scaling ratio based on maxWidth
        const ratio = (maxWidth - marginInRow) / (curRowWidth - marginInRow);
        // Set the size of each element in this row
        rowItems.forEach((item) => {
          item.width = Math.floor(item.width * ratio);
          item.height = Math.floor(childWrap.height * ratio);
        });
        // Add the current row to the list of rows
        displayItems.push(...rowItems);

        // Prepare next row
        rowItems = [];
        curRowWidth = 0;
        rowIndex++;
      }
    });

    // Layout last row
    if (rowItems.length > 0 && !truncate) {
      displayItems?.push(...rowItems);
    }

    if (!rerender) {
      setRerender(true);
      setTimeout(forceRender, 0);
    }

    return displayItems?.map((childWrap) => {
      const child = childWrap.child as React.ReactElement;

      if (child.type !== FlexImagesItem) {
        return child;
      }

      // Just clone the child if it's a FlexImagesItem
      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          width: childWrap.width,
          height: childWrap.height,
        },
      });
    });
  };

  return (
    <div ref={selfRef} className="flex-images">
      {!selfRef.current && <div style={{ display: "none" }}>{props.children}</div>}
      {selfRef.current && props.children && calc(props.children)}
    </div>
  );
}
