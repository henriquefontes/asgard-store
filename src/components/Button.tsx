import React, { useState } from "react";

type ButtonProps = {
  children: React.ReactNode | Array<React.ReactNode> | string;
  style?: React.CSSProperties;
  colors: {
    background: string;
    text: string;
    hover?: {
      text?: string;
      background: string;
    };
  };
  link?: string;
};

export default function Button(props: ButtonProps) {
  const [isHover, setIsHover] = useState(false);
  const { colors, style, children, link } = props;
  const colorChangeOnHover = colors?.hover?.background;
  const { background: backgroundColor, text: textColor } = colors;
  const { text: textHoverColor, background: backgroundHoverColor } =
    colors.hover ?? {};

  function handleMouseEnter() {
    setIsHover(true);
  }
  function handleMouseLeave() {
    setIsHover(false);
  }

  const buttonElement = (
    <button
      style={{
        width: "fit-content",
        height: "100%",
        cursor: isHover ? "pointer" : "auto",
        background: colorChangeOnHover
          ? isHover
            ? backgroundHoverColor ?? backgroundColor
            : backgroundColor
          : backgroundColor,
        color: colorChangeOnHover
          ? isHover
            ? textHoverColor || textColor
            : textColor
          : textColor,
        padding: "8px",
        textTransform: "uppercase",
        fontWeight: "bolder",
        transition: "background-color, .3s",
        border: 0,
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );

  return link ? <a href={link}>{buttonElement}</a> : buttonElement;
}
