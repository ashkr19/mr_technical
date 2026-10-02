import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';

interface UnderlinedTextProps {
  text: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  underlinePosition: string;
  tag: keyof JSX.IntrinsicElements;
  margin?: string;
}

const UnderlinedText: React.FC<UnderlinedTextProps> = ({
  text,
  color,
  fontFamily,
  fontSize,
  tag,
  underlinePosition,
  margin,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const style: React.CSSProperties = {
    color: color || "white",
    fontFamily: fontFamily || "Inter, Arial, sans-serif",
    fontSize: fontSize || "1.9rem",
    padding: "0.5rem",
    textDecoration: "underline",
    textUnderlineOffset: "0.45rem" || underlinePosition,
    WebkitTextDecorationLine: "underline",
    margin: margin,
  };

  const hoverStyle: React.CSSProperties = {
    textDecorationColor: isHovered ? "#00A6EB" : "#2C2F3F",
    cursor: isHovered ? "pointer" : "default",
  };

  const combinedStyle = { ...style, ...hoverStyle };

  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={combinedStyle}
      smooth
      to={`#${text.toLowerCase()}`}
    >
      {text}
    </Link>
  );
};

export default UnderlinedText;
