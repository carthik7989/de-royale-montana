"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stayIncludes = [
  {
    title: "Fitness Center",
    image: "/images/home/beyond-limits.webp",
    type: "tall",
    textColor: "text-ivory"
  },
  {
    title: "Room Service",
    image: "/images/home/true-perfection.webp",
    type: "wide",
    textColor: "text-ivory"
  },
  {
    title: "Fitness Center",
    image: "/images/home/beyond-limits.webp",
    type: "tall",
    textColor: "text-secondary"
  },
  {
    title: "Room Service",
    image: "/images/home/true-perfection.webp",
    type: "wide",
    textColor: "text-secondary"
  },
  {
    title: "Fitness Center",
    image: "/images/home/beyond-limits.webp",
    type: "tall",
    textColor: "text-secondary"
  },
  {
    title: "Room Service",
    image: "/images/home/true-perfection.webp",
    type: "wide",
    textColor: "text-secondary"
  },
];

export default function Stay() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    // Create a context for easy cleanup
    const ctx = gsap.context(() => {
      // Calculate how far to scroll (total width - viewport width)
      // Get the actual left padding of the section
      const sectionStyles = window.getComputedStyle(section);
      const paddingLeft = parseFloat(sectionStyles.paddingLeft) || 0;

      // Calculate scroll amount: container's full scrollable width minus the visible area
      // Use different padding multipliers based on screen size (mobile: 2, tablet+: 2.5)
      const paddingMultiplier = window.innerWidth < 768 ? 2.7 : 2;
      const scrollAmount = -(container.scrollWidth - window.innerWidth + paddingLeft * paddingMultiplier);

      gsap.to(container, {
        x: scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${Math.abs(scrollAmount)}`, // The scroll length matches the horizontal movement distance
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true, // Recalculate on resize
        },
      });
    }, section);


    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen w-full flex flex-col items-start fpl fpy bg-[url('/images/home/stay-bg.webp')] bg-cover bg-center overflow-hidden">
      {/*  overlay */}
      <div className="absolute inset-0 bg-black opacity-90"></div>
      {/* End of  overlay */}

      {/* Content  */}
      <div className="relative w-full h-full z-10 flex flex-col gap-y-14 md:gap-y-18 2xl:gap-y-24 3xl:gap-y-27">
        <h2 className="f-lg sm:f-xl 2xl:f-xxl font-beautique font-regular tracking-wider text-ivory">Your stay at Montana includes</h2>

        <div ref={containerRef} className="flex w-full h-full gap-x-10 md:gap-x-16 justify-start items-center uppercase pr-20">
          {stayIncludes.map((stayItem, index) => (
            <div
              key={index}
              className={`relative shrink-0 bg-cover bg-center ${stayItem.type === "tall"
                ? "w-[70vw] h-full sm:w-[50vw] md:w-[40vw] lg:w-[25vw] xl:w-[20vw]  3xl:h-full 3xl:w-[22vw]"
                : "w-[90vw] h-[60%] sm:w-[60vw] md:w-[50vw] lg:w-[45vw] xl:w-[35vw] 2xl:w-[30vw] 3xl:h-[60%] 3xl:w-[35vw]"
                }`}
              style={{ backgroundImage: `url('${stayItem.image}')` }}
            >
              <h4
                className={`f-md font-mona font-light absolute ${stayItem.textColor} ${stayItem.type === "tall"
                  ? "-rotate-90 bottom-5 left-5 origin-bottom-left whitespace-nowrap"
                  : "bottom-0 left-5 origin-bottom-left translate-y-1/2 text-nowrap"
                  }`}
              >
                {stayItem.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
      {/* End of Content  */}
    </div>
  );
}