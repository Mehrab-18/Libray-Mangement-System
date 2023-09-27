"use client";

import { PiWarningCircleBold } from "react-icons/pi";
import Image from "next/image";
const books = require("@/public/images/Homepage Books_1.png");

import { CustomButton, SearchBar } from "@/components";
import CustomLink from "./CustomLink";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-between bg-custom-offwhite">
      <div className="w-full lg:w-1/2 px-2 lg:px-8 py-12 flex flex-col justify-center items-center">
        <div className="text-custom-mobile-orange my-4 text-center	">
          <h4>Manage, display and make an offer to buy</h4>
        </div>
        <div className=" text-center	my-2 text-3xl font-bold">
          <h2>
            You're bound to find
            <br />
            more here.
          </h2>
        </div>
        <div className="text-center	my-4 font-medium">
          <h5>
            Everthing you need to stay current, showcase your book collection,
            meet like minded individuals and potential customers, and be
            inspired by amazing collector'sitems is right here
          </h5>
        </div>
        <div className="w-full lg:w-[70%] flex justify-center">
          <SearchBar placeholder="Search library number" />
        </div>
        <div className="flex my-4 w-full  md:w-[60%] justify-center gap-4">
          <CustomLink
            title="All Works"
            url="/works"
            customStyles="flex w-full lg:w-1/2 items-center justify-center hover:no-underline hover:bg-custom-alert-orange bg-custom-mobile-orange text-white text-base rounded-full h-9 w-32"
          />
          <CustomLink
            title="All libraries"
            url="/libraries"
            customStyles="flex w-full lg:w-1/2 items-center justify-center hover:no-underline hover:bg-custom-alert-orange bg-custom-mobile-orange text-white text-base rounded-full h-9 w-32"
          />
          <CustomLink
            title="Showrooms"
            url="/showroom"
            customStyles="flex w-full lg:w-1/2 items-center justify-center hover:no-underline hover:bg-custom-alert-orange bg-custom-mobile-orange text-white text-base rounded-full h-9 w-32"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 mt-0 w-full lg:w-2/5 ">
        <div className="mt-0 bg-custom-offwhite flex flex-row gap-3 py-2 items-center justify-center shadow-2xl mx-auto  w-[280px]">
          <span className="text-red-400">
            <PiWarningCircleBold />
          </span>{" "}
          Kollectiv Archiv warns of scams !
        </div>
        <div className="hidden lg:block ">
          <Image src={books} alt="books" width={500} height={650} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
