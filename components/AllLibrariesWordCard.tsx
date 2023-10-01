import React from "react";
import Image from "next/image";
import { WorkCardProps } from "@/types";

const AllLibrariesWordCard = ({
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
    <div className="min-w-[230px] bg-[#F4F4F4] lg:min-w-[230px] h-fit flex flex-col border shadow-xl rounded-md">
      <div className="w-full  rounded-t-xl">
        {isHomePageCard ? (
          <Image
            src={imageUrl}
            alt="Card Image"
            layout="fill"
            objectFit="contain"
          />
        ) : (
          <div className="h-[175px] flex items-center justify-center">
            <div
              style={{ width: "120px", height: "120px" }}
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
          {/* <div className="flex justify-between p-5 items-center">
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
              <div className="space-x-2">
                <span className="text-custom-brown text-[15px]">Volumes:</span>
                <span className="text-black text-[15px]">{noOfVolumes}</span>
              </div>
            )}
          </div> */}
          <div className="text-[13px] h-[85px] w-[230px] pt-3 p-5 text-custom-brown font-semibold">
            <div className="truncate">{titleText}</div>
          </div>

          <div className="px-3">
            <hr />
          </div>
          <div className=" p-2 border-gray-300">
            <div className="w-full flex justify-between">
              <div className="w-[45%] pt-1 text-custom-brown text-[12px] font-light justify-self-end	">
                {isfooterText && <span>{footerText}</span>}
              </div>
              <div className="w-[45%] pt-1 text-custom-brown text-[12px] font-light justify-self-end	">
                {isfooterText2 && <span>{footerText2}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllLibrariesWordCard;
