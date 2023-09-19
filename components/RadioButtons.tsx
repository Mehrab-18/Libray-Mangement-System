"use client";
import React, { useState } from "react";
import Link from "next/link";

const RadioButtons = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index: any) => {
    setActiveButton(index);
  };

  const buttons = [
    { text: "Works", linkTo: "/works" },
    { text: "Libraries", linkTo: "/libraries" },
    { text: "Showroom", linkTo: "/showroom" },
  ];

  return (
    <div className="w-fit flex bg-white shadow-lg text-custom-gray rounded-full">
      {buttons.map((button, index) => (
        <Link
          key={index}
          href={button.linkTo}
          className={`px-4 py-2 rounded-full  ${
            activeButton === index
              ? "bg-orange-500 text-white"
              : "bg-white text-custom-gray"
          } transition-colors duration-200 ease-in-out`}
          onClick={() => handleButtonClick(index)}
        >
          {button.text}
        </Link>
      ))}
    </div>
  );
};

export default RadioButtons;
