import React from "react";
import Image from "next/image";
import img1 from "@/public/images/Manage_Icon.svg";

interface CardProps {
  imageUrl: string;
  footerText: string;
}

const Card: React.FC<CardProps> = ({ footerText, imageUrl }) => {
  return (
    <div className="min-w-[250px] min-h-[250px] border flex flex-col items-center shadow-lg rounded-lg m-2">
      <div className="w-full h-3/4 p-4 mb-4 bg-[#F4F4F4]">
        <Image src={imageUrl} alt="Card Image" className="object-contain" />
      </div>
      <div className="h-1/4 w-full bg-[white]">
        <div className="text-center h-full flex items-center justify-center">
          <p className="text-[16px] font-semibold">{footerText}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
