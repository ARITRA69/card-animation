import Image from "next/image";
import React from "react";

type Props = {};

const Card = ({ title, description, link, src, color }: any) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <div
        style={{ backgroundColor: color }}
        className="w-[800px] h-[400px] rounded-xl p-6"
      >
        <h1 className="text-black text-center text-2xl pb-6 font-semibold">
          {title}
        </h1>
        <div className="flex justify-between items-center gap-20 h-full">
          <div className="flex flex-col gap-y-5">
            <p className="line-clamp-4">{description}</p>
            <p className="text-sm">- {src}</p>
          </div>
          <div className="w-[500px] h-[250px]">
            <Image
              src={link}
              width={1000}
              height={1000}
              alt={src}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
