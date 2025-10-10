"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Monitor loading performance
    const handleLoad = () => {
      if (typeof performance !== "undefined" && performance.timing) {
        const loadTime =
          performance.timing.loadEventEnd - performance.timing.navigationStart;
        const domContentLoaded =
          performance.timing.domContentLoadedEventEnd -
          performance.timing.navigationStart;

        console.log("🚀 Performance Metrics:");
        console.log("📊 Page load time:", loadTime + "ms");
        console.log("📄 DOM ready time:", domContentLoaded + "ms");

        // Track images loading time
        const images = document.querySelectorAll("img");
        console.log("🖼️ Total images:", images.length);
      }
    };

    // Monitor PerformanceObserver for images
    if ("PerformanceObserver" in window) {
      const imageObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.initiatorType === "img") {
            console.log(
              "🖼️ Image loaded:",
              resourceEntry.name,
              "- Duration:",
              Math.round(resourceEntry.duration) + "ms"
            );
          }
        }
      });

      imageObserver.observe({ entryTypes: ["resource"] });
    }

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return null;
}
