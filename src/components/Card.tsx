"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = ({
  title,
  description,
  link,
  src,
  color,
  i,
  progress,
  targetScale,
  range,
}: any) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="w-[800px] h-[400px] rounded-xl p-6 relative"
      >
        <h1 className="text-black text-center text-2xl pb-6 font-semibold">
          {title}
        </h1>
        <div className="flex justify-between items-center gap-20 h-full">
          <div className="flex flex-col gap-y-5 w-[50%]">
            <p className="line-clamp-4">{description}</p>
            <p className="text-sm">- {src}</p>
          </div>
          <div className="w-[50%] rounded-xl overflow-hidden">
            <motion.div style={{ scale: imageScale }}>
              <Image
                src={link}
                width={600}
                height={600}
                alt={src}
                className="w-[500px] h-[250px] object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
