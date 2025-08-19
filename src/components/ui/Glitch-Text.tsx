"use client";
import React, { FC, CSSProperties } from "react";

interface GlitchTextProps {
  text: string;
  speed?: number;                // Base animation speed
  color1?: string;              // After-layer color
  color2?: string;              // Before-layer color
  className?: string;
}

interface GlitchStyles extends CSSProperties {
  "--glitch-speed": string;
}

const GlitchText: FC<GlitchTextProps> = ({ text, speed = 1, color1 = "red", color2 = "cyan", className = "" }) => {
  const styles: GlitchStyles = {
    "--glitch-speed": `${speed}s`
  };

  return (
    <span className={`relative inline-block text-5xl font-bold ${className}`} style={styles}>
      {text}
      <span aria-hidden="true" className="glitch-layer glitch-after" style={{ color: color1 }}>
        {text}
      </span>
      <span aria-hidden="true" className="glitch-layer glitch-before" style={{ color: color2 }}>
        {text}
      </span>
    </span>
  );
};

export default GlitchText;
