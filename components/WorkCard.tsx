import React from "react";
import Image from "next/image";
import { WorkCardProps } from "@/types";

const WorkCard = ({
  imageUrl,
  isType,
  isHomePageCard = true,
  typeBgColor = "#342923",
  typeColor = "#fff",
  typeText,
  titleText,
  footerText,
  isfooterText,
  isfooterText2,
  footerText2,
  hasVolumes,
  noOfVolumes,
}: any) => {
  return (
    <div className="min-w-[350px] lg:min-w-[400px] min-h-[477px] flex flex-col justify-between border shadow-lg rounded-lg m-2 overflow-hidden">
      <div className="w-full bg-[#F4F4F4] relative">
        {isHomePageCard ? (
          <Image
            src={imageUrl}
            alt="Card Image"
            layout="fill"
            objectFit="contain"
          />
        ) : (
          <img
            src={imageUrl}
            alt="Card Image"
            width={350}
            height={300}
            style={{ objectFit: "contain", height: "100%" }}
          />
        )}
      </div>
      <div className="pt-2 h-[45%] bg-white">
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-between px-2 items-center">
            {isType && (
              <button
                className={
                  isHomePageCard
                    ? `bg-custom-brown h-6 w-16 text-white text-center px-2 text-[12px] rounded-full `
                    : `bg-custom-offwhite h-6 w-16 text-custom-brown font-semibold text-center px-2 text-[12px] rounded-full `
                }
              >
                {typeText}
              </button>
            )}
            {hasVolumes && (
              <span className="text-custom-brown text-[11px] ">
                {`Volumes:${noOfVolumes}`}
              </span>
            )}
          </div>
          <div
            className={`text-[16px] pl-2 text-custom-brown font-semibold my-3`}
          >
            {titleText}
          </div>
          <div className="border-t px-2 pb-4 border-gray-300">
            <div className="w-full flex justify-between">
              <div className="w-[45%] pt-2 text-custom-brown text-[14px] justify-self-end	">
                {isfooterText && <span>{footerText}</span>}
              </div>
              <div className="w-[45%] pt-2 text-custom-brown text-[12px] justify-self-end	">
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
