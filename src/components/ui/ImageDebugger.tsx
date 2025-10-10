"use client";

import { useEffect } from "react";

export default function ImageDebugger() {
  useEffect(() => {
    // Check if images exist
    const checkImage = (src: string) => {
      const img = new Image();
      img.onload = () => console.log(`✅ Image loaded successfully: ${src}`);
      img.onerror = () => console.error(`❌ Failed to load image: ${src}`);
      img.src = src;
    };

    // Check critical images
    checkImage("/images/bg.png");
    checkImage("/images/visionimg.png");
    checkImage("/images/ovglogo.png");
    checkImage("/images/blackovglogo.png");

    console.log("🔍 Image debugging initialized");
  }, []);

  return null;
}
