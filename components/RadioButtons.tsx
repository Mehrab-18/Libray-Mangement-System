//Radiobuttons
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const RadioButtons = () => {
  const [path, setPath] = useState<any>();

  useEffect(() => {
    const currentPath = window.location.pathname;
    setPath(currentPath);
  }, []);

  const buttons = [
    { text: "Works", linkTo: "/works" },
    { text: "Libraries", linkTo: "/libraries" },
    { text: "Showroom", linkTo: "/showroom" },
  ];

  return (
    <div
      className="w-fit flex bg-white text-custom-gray border rounded-full p-1.5"
      style={{
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {buttons.map((button, index) => (
        <Link
          key={index}
          className={`px-4 py-1 rounded-full cursor-pointer ${
            path === button.linkTo
              ? "bg-custom-radio-orange text-white shadow-lg"
              : " text-custom-gray"
          } `}
          href={button.linkTo}
        >
          {button.text}
        </Link>
      ))}
    </div>
  );
};

export default RadioButtons;
