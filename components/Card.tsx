import React from "react";
import Image from "next/image";
import img1 from "@/public/images/Manage_Icon.svg";

interface CardProps {
  imageUrl: string;
  footerText: string;
}

const Card: React.FC<CardProps> = ({ footerText, imageUrl }) => {
  return (
    <div className="min-w-[300px] min-h-[300px] p-4 border shadow-lg rounded-lg m-2">
      <Image
        src={imageUrl}
        alt="Card Image"
        className="w-2/3 h-3/4 object-contain"
      />
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold">{footerText}</p>
      </div>
    </div>
  );
};

export default Card;
