import React from "react";
import "./CustomDiv.css";

const CustomDiv = ({
  children,
  width,
  height,
  borderRadius,
  border,
  padding,
  margin,
}) => {
  const divWidth = width ? width : 100;
  const divHeight = height ? height : 100;
  const divBR = borderRadius ? borderRadius : 0;
  const divBorder = border ? border : "1px solid black";
  const divMargin = margin ? margin : 0;
  const divPadding = padding ? padding : 0;

  return (
    <div
      style={{
        width: divWidth,
        height: divHeight,
        borderRadius: divBR,
        border: divBorder,
        margin: divMargin,
        padding: divPadding,
      }}
    >
      {children}
    </div>
  );
};

export default CustomDiv;
