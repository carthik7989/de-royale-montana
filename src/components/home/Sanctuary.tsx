"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Sanctuary() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const beyondRef = useRef<HTMLDivElement>(null);
  const perfectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const beyond = beyondRef.current;
    const perfection = perfectionRef.current;

    if (!section || !image || !content || !beyond || !perfection) return;

    let ctx: gsap.Context | null = null;
    let resizeTimeout: NodeJS.Timeout;

    const createAnimation = () => {
      // Kill existing animation first
      if (ctx) {
        ctx.revert();
        ctx = null;
      }

      // Only create animation for lg breakpoint (1024px) and above
      if (window.innerWidth < 1280) {
        // Reset any inline styles that GSAP may have applied
        gsap.set([image, content, beyond, perfection], { clearProps: "all" });
        ScrollTrigger.refresh();
        return;
      }

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // 1. Move image AND cards from bottom/offset to vertical center/target
        tl.fromTo(
          image,
          {
            width: "20vw",
            height: "20vh",
            top: "120%",
            left: "50%",
            xPercent: -50,
            yPercent: -50,
            opacity: 0,
          },
          {
            top: "50%",
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          }
        );

        // Animate cards upwards immediately starting from position 0
        tl.fromTo([beyond],
          {
            y: 100,
          },
          {
            y: -20,
            duration: 1.5,
            ease: "none",
          },
          0
        );

        tl.fromTo([perfection],
          {
            y: 0,
          },
          {
            y: "-80vh",
            duration: 2,
            ease: "none",
          },
          0
        );

        // Start fading text when image top reaches text bottom
        tl.to(content, {
          opacity: 0,
          y: -30,
          duration: 0.4,
        }, 0.3);

        // 2. Scale image to full screen
        tl.to(image, {
          width: "100vw",
          height: "100vh",
          duration: 1,
          ease: "none",
        }, ">-0.1");

      }, section);
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        createAnimation();
      }, 250); // Debounce resize events
    };

    // Initial setup
    createAnimation();

    // Listen for resize
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      if (ctx) ctx.revert();
    };
  }, []);



  return (
    <div ref={sectionRef} className="relative w-full h-auto xl:h-screen flex flex-col gap-9 items-center fpx fpb lg:fpt bg-primary overflow-hidden">
      {/* Cards behind image - z-0 */}

      {/* Text on top - z-20 */}
      <div className="relative z-0 w-full h-full grid grid-cols-1 grid-rows-[repeat(4, auto)] md:grid-cols-3 md:grid-rows-[repeat(3, auto)] xl:grid-cols-1 xl:grid-rows-1 gap-9 items-center justify-items-center">
        {/* Beyond Limits */}
        <div
          ref={beyondRef}
          className="relative xl:absolute right-0 top-0 w-[85%] h-[304px] sm:w-[45%] md:w-full xl:w-[20%] 3xl:w-[330px] 3xl:h-[400px] bg-[url('/images/home/beyond-limits.webp')] bg-cover bg-center z-0 md:col-span-1  order-2"
        >
          <h4 className="f-md 2xl:f-md -rotate-90 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-ivory text-nowrap uppercase font-mona font-light">Beyond Limits</h4>
        </div>
        {/* End of Beyond Limits */}

        {/* True Perfection */}
        <div
          ref={perfectionRef}
          className="relative xl:absolute left-0 bottom-0 w-[85%] h-[184px] sm:w-[55%] md:w-full xl:w-[20%] 3xl:w-[334px] 3xl:h-[250px] bg-[url('/images/home/true-perfection.webp')] bg-cover bg-center z-0 order-4 md:order-3"
        >
          <h4 className="f-md 2xl:f-md absolute bottom-0 left-0 translate-x-1/4 3xl:translate-x-1/2 translate-y-1/2  text-ivory  text-nowrap uppercase font-mona font-light">True Perfection</h4>
        </div>
        {/* End of True Perfection */}

        {/* Text */}
        <div ref={contentRef} className="flex flex-col gap-y-4 w-full xl:w-1/2 3xl:w-1/2 lg:-mt-20 md:col-span-2 order-1">
          <h3 className="text-accent f-md sm:f-lg 3xl:f-xl font-beautique font-regular leading-tight tracking-wider text-center md:text-left xl:text-center">A Sanctuary of Luxury <br /> and Peace</h3>
          <p className="text-ivory f-sm mlg:f-base xl:f-sm 2xl:f-base font-mona font-light leading-normal text-center md:text-left xl:text-center">  A boutique retreat nestled in the heart of the Western Ghats, where luxury meets tranquility. Surrounded by lush greenery and sacred hills, our resort offers more than just a stay — it&apos;s an escape into serene landscapes, thoughtful comforts, and warm hospitality. Whether you&apos;re here for spiritual solace or mountain air, every moment is designed to relax, rejuvenate, and reconnect. </p>
        </div>
        {/* End of Text */}

        <Image
          src="/images/home/luxury.webp"
          width={687}
          height={489}
          alt="Luxury"
          className=" xl:hidden w-full h-[250px] sm:h-[371px] object-cover object-center md:col-span-2 md:col-start-2 md:row-start-3 order-3 md:order-4"
        />
      </div>

      {/* Main scaling image - z-1 */}
      <Image
        ref={imageRef}
        src="/images/home/luxury.webp"
        width={687}
        height={489}
        alt="Luxury"
        className="hidden xl:block xl:absolute object-cover object-center z-1"
      />
    </div>
  );
}