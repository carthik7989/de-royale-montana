"use client";

import { useLayoutEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface InfiniteHorizontalScrollProps {
  children: ReactNode;
  duration?: number; // Animation duration in seconds (higher = slower)
  gapClassName?: string; // Tailwind gap classes (e.g., "gap-6 md:gap-7 2xl:gap-16")
  className?: string; // Additional classes for the wrapper
  minItems?: number; // Minimum number of items needed (default: 3)
}

export default function InfiniteHorizontalScroll({
  children,
  duration = 20,
  gapClassName = "gap-6 md:gap-7 2xl:gap-16",
  className = "",
  minItems = 3,
}: InfiniteHorizontalScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const items = container.children;
    if (items.length < minItems) return;

    // Use GSAP Context for proper cleanup
    const ctx = gsap.context(() => {
      // Calculate animation dimensions and create animation
      const createAnimation = () => {
        // Kill existing timeline if it exists
        if (timelineRef.current) {
          timelineRef.current.kill();
        }

        // Get actual computed dimensions from first two items
        const firstItem = items[0] as HTMLElement;
        const secondItem = items[1] as HTMLElement;
        
        if (!firstItem || !secondItem) return;

        const itemWidth = firstItem.offsetWidth;
        const computedGap = secondItem.offsetLeft - firstItem.offsetLeft - itemWidth;
        
        // Calculate width of first set (original items)
        const firstSetWidth = itemWidth * minItems + computedGap * (minItems - 1);
        
        // Add gap offset for seamless wrapping
        const totalWidth = firstSetWidth + computedGap;

        // Reset position to start
        gsap.set(container, { x: 0 });

        // Create seamless infinite scroll using GSAP modifiers with modulo
        const tl = gsap.timeline({
          repeat: -1,
          defaults: { ease: "none" },
        });

        tl.to(container, {
          x: -totalWidth,
          duration,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        });

        timelineRef.current = tl;
        return tl;
      };

      // Small delay to ensure layout is calculated
      const timer = setTimeout(() => {
        createAnimation();
      }, 100);

      // Recalculate on resize
      let resizeTimer: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          gsap.set(container, { x: 0 });
          createAnimation();
        }, 150);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup function for timers and event listeners
      return () => {
        clearTimeout(timer);
        clearTimeout(resizeTimer);
        window.removeEventListener("resize", handleResize);
      };
    }, container); // Scope to container

    ctxRef.current = ctx;

    // Cleanup on unmount
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      if (ctxRef.current) {
        ctxRef.current.kill(); // Kills all GSAP animations in context
        ctxRef.current = null;
      }
      if (container) {
        gsap.set(container, { x: 0 }); // Reset position
      }
    };
  }, [duration, minItems]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        ref={scrollContainerRef}
        className={`flex ${gapClassName}`}
        style={{ width: "fit-content" }}
      >
        {/* Original set of items */}
        {children}
        
        {/* Duplicate sets for seamless loop */}
        {children}
        {children}
      </div>
    </div>
  );
}

