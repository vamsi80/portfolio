"use client";

import * as React from "react";
import { useEffect, useState, useRef } from "react";

export interface TypewriterProps {
  text: string | string[];
  speed?: number;
  cursor?: string;
  loop?: boolean;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

export function Typewriter({
  text,
  speed = 100,
  // cursor = "|",
  loop = false,
  deleteSpeed = 50,
  delay = 1500,
  className,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const elementRef = useRef<HTMLSpanElement | null>(null);

  // Convert input into array
  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[textArrayIndex] || "";

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // restart typing
          setIsVisible(true);
          setDisplayText("");
          setCurrentIndex(0);
          setIsDeleting(false);
          setTextArrayIndex(0);
          setIsTyping(true);
        } else {
          setIsVisible(false);
          setIsTyping(false);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!isVisible || !currentText) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayText((prev) => prev + currentText[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
          setIsTyping(true);
        } else if (loop) {
          setTimeout(() => setIsDeleting(true), delay);
        } else {
          setIsTyping(false); // stop cursor after finishing
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setIsTyping(true);
        } else {
          setIsDeleting(false);
          setCurrentIndex(0);
          setTextArrayIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [
    isVisible,
    currentIndex,
    isDeleting,
    currentText,
    loop,
    speed,
    deleteSpeed,
    delay,
    displayText,
    text,
  ]);

  return (
    <span ref={elementRef} className={className}>
      {displayText}
      {/* {isTyping && <span className="animate-pulse">{cursor}</span>} */}
    </span>
  );
}
