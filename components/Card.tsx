"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/public/images/Manage_Icon.svg";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  footerText: string;
}

const Card: React.FC<CardProps> = ({ footerText, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="min-w-[250px] min-h-[250px] border flex flex-col items-center shadow-lg rounded-lg m-2 relative bg-[#F4F4F4]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-3/4">
        <Image
          src={imageUrl}
          alt="Card Image"
          width={150}
          height={200}
          className="object-contain"
        />
      </div>
      <div
        className={`rounded-tl-lg rounded-tr-md absolute bottom-0 left-0 right-0 bg-white overflow-hidden w-full transition flex ease duration-500 ${
          hovered ? "h-3/4" : "h-0"
        }`}
      >
        <div className="text-black text-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum iure
          commodi libero numquam mollitia amet rerum eveniet nulla voluptate,
          nesciunt nemo eos rem quos? Placeat sit velit nam explicabo saepe!
        </div>
        {/* <div>
          <Link href="/works">Works</Link>
        </div> */}
      </div>
      <div className="h-1/2 w-full bg-[white] mt-6 rounded-tl-lg rounded-tr-md">
        <div className="text-center h-full flex items-center justify-center">
          <p className="text-[16px] font-semibold">{footerText}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
