# ScrollTrigger + Lenis Usage Examples

## Basic Setup

The smooth scroll is already set up in `layout.tsx`. You can now use GSAP ScrollTrigger for animations.

## Pinning Example

Pin an element during scroll:

```tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PinnedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000",
        pin: true,
        pinSpacing: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div ref={sectionRef} className="h-screen bg-primary">
      <h2>This section will be pinned</h2>
    </div>
  );
}
```

## Parallax with data-speed Attribute

Use the `initParallaxSpeed()` utility:

```tsx
"use client";

import { useEffect } from "react";
import { initParallaxSpeed } from "@/lib/useScrollTrigger";

export default function ParallaxSection() {
  useEffect(() => {
    initParallaxSpeed();
  }, []);

  return (
    <div>
      {/* Slow parallax */}
      <div data-speed="0.5" className="parallax-element">
        This moves slower than scroll
      </div>
      
      {/* Fast parallax */}
      <div data-speed="-0.5" className="parallax-element">
        This moves faster (negative = opposite direction)
      </div>
    </div>
  );
}
```

## Custom ScrollTrigger Animation

```tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimatedSection() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === elementRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div ref={elementRef} className="h-screen">
      <h2>This animates on scroll</h2>
    </div>
  );
}
```

## Using the useScrollTrigger Hook

```tsx
"use client";

import { useScrollTrigger } from "@/lib/useScrollTrigger";

export default function ScrollTriggeredSection() {
  const triggerRef = useScrollTrigger({
    start: "top center",
    end: "bottom top",
    pin: true,
    onEnter: () => console.log("Entered"),
    onLeave: () => console.log("Left"),
  });

  return (
    <div ref={triggerRef} className="h-screen">
      <h2>Scroll triggered section</h2>
    </div>
  );
}
```

## Notes

- Always clean up ScrollTrigger instances in useEffect cleanup
- Make sure to import `ScrollTrigger` from `gsap/ScrollTrigger`
- The smooth scroll from Lenis works automatically with all ScrollTrigger animations
- Mouse wheel scrolling should work smoothly now!

