import React from "react";
import Image from "next/image";
import YouTube from "react-youtube";
import thumbnail from "@/public/images/Video_Placeholder.png";

interface MissionComponentProps {
  videoUrl: string;
  thumbnailUrl: string;
}

const Mission: React.FC<MissionComponentProps> = ({
  videoUrl,
  thumbnailUrl,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-start px-3 lg:px-0 lg:ml-32 lg:gap-28 lg:py-28 w-full">
      <div className="left-section w-full lg:w-1/3 px-4 lg:px-0">
        <Image src={thumbnail} alt="Thumbnail" className="object-contain" />
      </div>
      <div className="right-section w-full lg:w-2/4">
        {/* <div className="mission-details"> */}
        <div className="text-custom-mobile-orange pl-3 mt-7 lg:mt-5  text-xs lg:ml-0 my-4 lg:my-0">
          Our Mission
        </div>
        <div className=" text-2xl lg:text-3xl lg:py-7 gap-10 w-[270px] lg:w-full ml-3 lg:ml-0 font-semibold">
          From&nbsp; book&nbsp; Lovers&nbsp; for&nbsp; book&nbsp;
          <br className="hidden lg:block" /> lovers
        </div>
        <div className="text-xs  ml-3 text-left  lg:ml-0 my-4 w-[300px] lg:w-2/4 lg:my-0">
          Valuable books need an appropriate environment. Not only material but
          also ideal values are associated with them. As lovers of special
          books, we know this very well. We ourselves have many years of
          experience in selling high-quality, limited editions and know the high
          demands of passionate book collectors. With the book register of
          Kollektum GmbH, we have therefore created a platform that combines
          user-friendliness, security, and discretion.
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Mission;
