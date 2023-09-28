"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/public/images/Manage_Icon.svg";
import Link from "next/link";
import dotsIcon from "../public/icons/8-dots.png";

interface CardProps {
  imageUrl: string;
  footerText: string;
}

const Card: React.FC<CardProps> = ({ footerText, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="min-w-[400px] min-h-[440px] border flex flex-col items-center shadow-lg rounded-lg m-2 relative bg-[#F4F4F4]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-3/4">
        <Image
          src={imageUrl}
          alt="Card Image"
          width={350}
          height={300}
          className="object-contain"
        />
      </div>

      <div
        className={`rounded-tl-lg rounded-tr-md absolute bottom-0 left-0 right-0 bg-white overflow-hidden w-full z-[10] transition-height flex ease-in-out duration-500 ${
          hovered ? "h-3/4" : "h-0"
        }`}
      >
        <div className="text-black text-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-[9]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum iure
          commodi libero numquam mollitia amet rerum eveniet nulla voluptate,
          nesciunt nemo eos rem quos? Placeat sit velit nam explicabo saepe!
        </div>
        {/* <div>
          <Link href="/works">Works</Link>
        </div> */}
      </div>
      <div className="flex-grow max-h-[85px] absolute h-[85px] bottom-0 w-full bg-[white] rounded-tl-lg rounded-tr-md">
        <div className="text-center h-full  space-y-2 mt-2 flex flex-col items-center">
          <div>
            <Image
              src={dotsIcon}
              alt="icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="text-[16px] font-semibold">{footerText}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
