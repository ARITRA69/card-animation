"use client";
import { useEffect, useRef } from "react";
import localFont from "next/font/local";
import { cars } from "@/data";
import Card from "@/components/Card";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const weirdFont = localFont({ src: "../../public/Beauty Wind.otf" });

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <main className="min-h-screen mt-96 relative">
      <h1
        className="text-5xl w-full flex justify-center fixed"
        style={weirdFont.style}
      >
        Scroll Scroll !!
      </h1>
      <div ref={container}>
        {cars.map((car, i) => {
          const targetScale = 1 - (cars.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              {...car}
              progress={scrollYProgress}
              targetScale={targetScale}
              range={[i * 0.25, 1]}
            />
          );
        })}
      </div>
    </main>
  );
}
