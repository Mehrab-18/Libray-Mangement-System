import React from "react";
import Image from "next/image";
import { WorkCardProps } from "@/types";

const AllWorkPageCard = ({
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
  isfooterTextHeading,
  isfooterTextHeading2,
  footerTextHeading,
  footerTextHeading2,
}: any) => {
  return (
    <div className="min-w-[350px] bg-[#F4F4F4] lg:min-w-[350px] h-fit flex flex-col border shadow-xl rounded-md">
      <div className="w-full  rounded-t-xl">
        {isHomePageCard ? (
          <Image
            src={imageUrl}
            alt="Card Image"
            layout="fill"
            objectFit="contain"
          />
        ) : (
          <div className="h-[280px] flex items-center justify-center">
            <div
              style={{ width: "200px", height: "250px" }}
              className="flex items-center justify-center"
            >
              <img
                src={imageUrl}
                alt="Card Image"
                style={{ objectFit: "cover", width: "100%", height: "80%" }}
              />
            </div>
          </div>
        )}
      </div>
      <div className=" bg-white h-fit rounded-t-xl rounded-b-md ">
        <div className="flex flex-col h-full justify-between ">
          <div className="flex justify-between p-5 items-center">
            {isType && (
              <button
                className={
                  isHomePageCard
                    ? `bg-custom-brown h-6 w-16 text-white text-center text-[12px] rounded-full `
                    : `bg-custom-offwhite text-custom-brown py-1.5 px-2.5 font-semibold text-center text-[12px] rounded-full `
                }
              >
                {typeText}
              </button>
            )}
            {hasVolumes && (
              <div className="space-x-1">
                <span className="text-custom-brown font-light text-[13px]">Volumes:</span>
                <span className="text-black font-medium text-[13px]">{noOfVolumes}</span>
              </div>
            )}
          </div>  
          <div className="text-[13px] h-[85px] w-[230px] pt-3 p-5 text-custom-brown font-semibold">
            <div className="truncate">{titleText}</div>
          </div>
          <div className="px-5">
            <hr />
          </div>
          <div className=" px-4 py-4 border-gray-300">
            <div className="w-full flex items-center justify-between">
              {isfooterText && (
                <div className="flex w-fit space-x-1">
                  {isfooterTextHeading && (
                    <div className="w-full text-custom-brown text-[12px]">
                      {footerTextHeading}
                    </div>
                  )}
                  <div className="w-full text-custom-brown font-semibold text-[12px]">
                    {" "}
                    {footerText}
                  </div>
                </div>
              )}
              <div className="flex-shrink-0 text-custom-brown text-[12px]">
                {isfooterText2 && (
                  <div className="flex w-fit space-x-1">
                    {isfooterTextHeading2 && (
                      <div className="w-full text-custom-brown text-[12px]">
                        {footerTextHeading2}
                      </div>
                    )}
                    <div className="w-full text-custom-brown font-semibold text-[12px]">
                      {footerText2}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllWorkPageCard;
