import React from "react";
import Image from "next/image";
import { WorkCardProps } from "@/types";

const WorkCard = ({
  imageUrl,
  isOriginal,
  originalText,
  description,
  footerText,
  isfooterText,
  isfooterText2,
  footerText2,
  hasVolumes,
  noOfVolumes,
  cardStyles,
}: WorkCardProps) => {
  return (
    <div className="min-w-[250px] h-96 border shadow-lg rounded-lg m-2 overflow-hidden">
      <div className="w-full h-[50%] bg-[#F4F4F4] relative">
        <Image
          src={imageUrl}
          alt="Card Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-auto px-4 py-8 bg-white">
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-between items-center">
            {isOriginal && (
              <button
                className={`bg-offwhite h-8 w-24 text-custom-brown  text-[14px] rounded-full px-4 py-1`}
              >
                {originalText}
              </button>
            )}
            {hasVolumes && (
              <span className="text-custom-brown text-[11px]">
                {`Volumes:${noOfVolumes}`}
              </span>
            )}
          </div>
          <div className={`text-[16px] text-${cardStyles} font-semibold my-3`}>
            {description}
          </div>
          <div className="border-t border-gray-300">
            <div className="w-full flex justify-between">
              <div className="w-1/2 pt-2 text-gray text-[14px] justify-self-end	">
                {isfooterText && <span>{footerText}</span>}
              </div>
              <div className="w-1/2 pt-2 text-gray text-[14px] justify-self-end	">
                {isfooterText2 && <span>{footerText2}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
