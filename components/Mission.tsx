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
    <div className="flex flex-col lg:flex-row justify-center gap-x-64 align-middle w-full">
      <div className="left-section w-full lg:w-1/3">
        <Image src={thumbnail} alt="Thumbnail" className="object-contain" />
      </div>
      <div className="right-section w-full lg:w-1/4">
        {/* <div className="mission-details"> */}
        <div className="text-custom-mobile-orange ml-3 lg:ml-0 my-4 lg:my-0">
          Our Mission
        </div>
        <div className="text-2xl lg:py-4 ml-3 lg:ml-0 font-semibold">
          From book lovers for book
          <br /> lovers
        </div>
        <div className="text-lg leading-8 ml-3 lg:ml-0 my-4 lg:my-0">
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
