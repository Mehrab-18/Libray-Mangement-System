import React from "react";
import Link from "next/link";

const HomeLibrarySection = () => {
  return (
    <div className="w-full h-[450px] lg:h-[400px] flex flex-col py-5 px-3 lg:pt-[110px] 2xl:px-36 lg:flex-row lg:justify-around bg-custom-offwhite lg:p-16">
      <div className="w-full lg:w-[38%] 2xl:w-[30%]">
        <p className="text-custom-brown tracking-wide  leading-8 font-semibold text-[18px] mt-0 m-3 lg:m-0 lg:text-[23px]">
          Are you looking for a specific work? Enter the name in the search
          field to display the corresponding work.
        </p>
      </div>
      <div className="w-full lg:w-[38%] 2xl:w-[30%] flex flex-col ">
        <div className="mb-4 mt-4 w-[90%]  lg:w-full xl:w-3/4 relative mx-4 lg:mx-0">
          <input
            type="text"
            placeholder="Work, title, category(e.g. Bible)"
            className="text-[13px] lg:text-[14px] w-full h-11 bg-white-100 shadow-md rounded-full px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="text-[13px] lg:text-[14px] absolute bottom-0 right-0 w-20 lg:w-24 bg-custom-mobile-orange rounded-full text-white h-11">
            Search
          </button>
        </div>
        <div className="mb-4 m-3 lg:m-0">
          <p className="text-custom-gray tracking-wide font-light leading-6 text-[14px]  py-4 lg:py-6  lg:text-[13px]">
            Aside from looking at single works you can also look at entire
            collections. You can either browse through our registered libraries
            or specifically look for a book collection by entering the
            corresponding library number.
          </p>
        </div>
        <div className="m-3  py-6 lg:py-0 lg:m-0">
          <Link
            href="/libraries"
            className="text-custom-mobile-orange text-[14px] lg:text-[11px] hover:text-custom-alert-orange"
          >
            Show all libraries
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLibrarySection;
