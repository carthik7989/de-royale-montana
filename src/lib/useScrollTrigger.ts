"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollTriggerOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  pin?: boolean | string;
  scrub?: boolean | number;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
  animation?: gsap.core.Tween;
}

/**
 * Hook for creating ScrollTrigger animations
 * Works seamlessly with Lenis smooth scroll
 */
export function useScrollTrigger(options: ScrollTriggerOptions) {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef.current) return;

    const trigger = options.trigger || triggerRef.current;
    const config: ScrollTrigger.Vars = {
      trigger: typeof trigger === "string" ? trigger : trigger,
      start: options.start || "top top",
      end: options.end || "bottom top",
      pin: options.pin || false,
      scrub: options.scrub || false,
      markers: options.markers || false,
    };

    if (options.onEnter) config.onEnter = options.onEnter;
    if (options.onLeave) config.onLeave = options.onLeave;
    if (options.onEnterBack) config.onEnterBack = options.onEnterBack;
    if (options.onLeaveBack) config.onLeaveBack = options.onLeaveBack;

    const scrollTrigger = ScrollTrigger.create(config);

    if (options.animation) {
      options.animation.scrollTrigger = scrollTrigger;
    }

    return () => {
      scrollTrigger.kill();
    };
  }, [options]);

  return triggerRef;
}

/**
 * Utility function to create parallax effect with data-speed attribute
 * Usage: Add data-speed="0.5" to any element
 */
export function initParallaxSpeed() {
  if (typeof window === "undefined") return;

  const elements = document.querySelectorAll<HTMLElement>("[data-speed]");

  elements.forEach((element) => {
    const speed = parseFloat(element.dataset.speed || "0");
    
    gsap.to(element, {
      y: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

/**
 * Utility function to create pinning effect
 */
export function createPin(
  selector: string | Element,
  options: {
    start?: string;
    end?: string;
    pinSpacing?: boolean;
  } = {}
) {
  return gsap.to(selector, {
    scrollTrigger: {
      trigger: selector,
      start: options.start || "top top",
      end: options.end || "+=100%",
      pin: true,
      pinSpacing: options.pinSpacing !== false,
    },
  });
}

