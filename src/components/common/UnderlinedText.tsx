import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

interface UnderlinedTextProps {
  text: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  underlinePosition: string;
  tag?: keyof JSX.IntrinsicElements;
  margin?: string;
  targetId?: string;
}

const UnderlinedText: React.FC<UnderlinedTextProps> = ({
  text,
  color,
  fontFamily,
  fontSize,
  underlinePosition,
  margin,
  targetId,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const style: React.CSSProperties = {
    color: color || "white",
    fontFamily: fontFamily || "Roboto Slab",
    fontSize: fontSize || "1.9rem",
    padding: "0.5rem",
    textDecoration: "underline",
    textUnderlineOffset: underlinePosition || "0.45rem",
    WebkitTextDecorationLine: "underline",
    margin,
  };

  const hoverStyle: React.CSSProperties = {
    textDecorationColor: isHovered ? "#00A6EB" : "#2C2F3F",
    cursor: isHovered ? "pointer" : "default",
  };

  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ ...style, ...hoverStyle }}
      smooth
      to={`#${targetId || text.toLowerCase()}`}
    >
      {text}
    </Link>
  );
};

export default UnderlinedText;
