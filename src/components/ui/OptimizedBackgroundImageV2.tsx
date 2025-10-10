"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface OptimizedBackgroundImageProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  fallbackEnabled?: boolean;
}

export default function OptimizedBackgroundImage({
  src,
  alt,
  className = "",
  children,
  priority = false,
  quality = 75,
  sizes = "100vw",
  fallbackEnabled = true,
}: OptimizedBackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [useNextImage, setUseNextImage] = useState(true);

  useEffect(() => {
    // For very large images, consider using CSS background instead
    const img = new window.Image();
    img.onload = () => {
      const fileSizeApprox =
        (img.naturalWidth * img.naturalHeight * 4) / (1024 * 1024); // Rough estimate in MB
      if (fileSizeApprox > 10 && fallbackEnabled) {
        console.warn(
          `Large image detected (${fileSizeApprox.toFixed(1)}MB estimated), using CSS background fallback: ${src}`
        );
        setUseNextImage(false);
        setIsLoaded(true);
      }
    };
    img.src = src;
  }, [src, fallbackEnabled]);

  if (!useNextImage) {
    // Use CSS background for very large images
    return (
      <div className={`relative ${className}`}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${src})` }}
        />
        {children && <div className="absolute inset-0 z-10">{children}</div>}
      </div>
    );
  }

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
        onError={() => {
          console.error(`Failed to load image with Next.js Image: ${src}`);
          if (fallbackEnabled) {
            setHasError(true);
            setUseNextImage(false);
            setIsLoaded(true);
          }
        }}
      />

      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse z-5" />
      )}

      {/* Fallback CSS background if Next.js Image fails */}
      {hasError && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${src})` }}
        />
      )}

      {/* Content overlay */}
      {children && <div className="absolute inset-0 z-10">{children}</div>}
    </div>
  );
}
