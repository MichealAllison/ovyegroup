"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedBackgroundImageProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

export default function OptimizedBackgroundImage({
  src,
  alt,
  className = "",
  children,
  priority = false,
  quality = 75,
  sizes = "100vw",
}: OptimizedBackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        priority={priority}
        quality={quality}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
      />
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
      )}
      {/* Content overlay */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
