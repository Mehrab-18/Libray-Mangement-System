import React from "react";
import { BookCardProps } from "@/types";

const BookCard: React.FC<BookCardProps> = ({ imageUrl, heading }) => {
  let imageSource: string;

  if (typeof imageUrl === "string") {
    // If imageUrl is a string, use it directly
    imageSource = imageUrl;
  } else if (typeof imageUrl === "object") {
    // If imageUrl is StaticImageData, extract the src property
    imageSource = imageUrl.src;
  } else {
    // Handle any other cases or provide a fallback image source
    imageSource = "/default-image.jpg"; // Update with your default image path
  }

  return (
    <div className="w-2/3 h-2/3 bg-offwhite rounded-lg shadow-lg p-4">
      {/* Image Section */}
      <div className="text-center">
        <img
          src={imageSource}
          alt="Card Image"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Footer Section */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold">{heading}</h3>
      </div>
    </div>
  );
};

export default BookCard;
