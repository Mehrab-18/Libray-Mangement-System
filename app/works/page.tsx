"use client";
import { SearchBar } from "@/components";
import Layout from "@/components/Layout";
import { ClipLoader } from "react-spinners";
import RadioButtons from "@/components/RadioButtons";
import WorkCard from "@/components/WorkCard";
import React, { useEffect, useState } from "react";
import { getPaginatedWorks } from "@/api/works";
import { Pagination } from "antd";
import Switch from "@mui/material/Switch";
import Link from "next/link";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const page = () => {
  const [worksCardData, setWorksCardData] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalRecords, setTotalRecords] = useState(0);
  const pageSizeOptions = ["9", "18", "60"];

  useEffect(() => {
    getWorks();
  }, [currentPage, pageSize]);

  const getWorks = async () => {
    const res: any = await getPaginatedWorks(currentPage, pageSize);
    setWorksCardData(res?.data.data);
    setTotalRecords(res?.data.meta.pagination.total);
  };

  const handlePaginationChange = (current: any, size: any) => {
    setCurrentPage(current);
    setPageSize(size);
  };

  const dummyGenres = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Fantasy",
    "Crime",
    "Animation",
  ];

  const dummyStyles = [
    "Style 1",
    "Style 2",
    "Style 3",
    "Style 1",
    "Style 2",
    "Style 3",
    "Style 1",
    "Style 2",
    "Style 3",
    "Style 1",
    "Style 2",
    "Style 3",
    "Style 1",
    "Style 2",
    "Style 3",
    "Style 1",
    "Style 2",
    "Style 3",
    "Style 1",
    "Style 2",
    "Style 3",
  ];
  const dummyYears = [
    "2020",
    "2021",
    "2022",
    "2023",
    "2020",
    "2021",
    "2022",
    "2023",
    "2020",
    "2021",
    "2022",
    "2023",
    "2020",
    "2021",
    "2022",
    "2023",
    "2020",
    "2021",
    "2022",
    "2023",
    "2020",
    "2021",
    "2022",
    "2023",
    "2020",
    "2021",
    "2022",
    "2023",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  const dummyAuthors = [
    "Author 1",
    "Author 2",
    "Author 3",
    "Author 1",
    "Author 2",
    "Author 3",
    "Author 1",
    "Author 2",
    "Author 3",
    "Author 1",
    "Author 2",
    "Author 3",
    "Author 1",
    "Author 2",
    "Author 3",
    "Author 1",
    "Author 2",
    "Author 3",
    "Author 1",
    "Author 2",
    "Author 3",
    "Author 1",
    "Author 2",
    "Author 3",
  ];
  const dummyCountries = [
    "Country 1",
    "Country 2",
    "Country 3",
    "Country 1",
    "Country 2",
    "Country 3",
    "Country 1",
    "Country 2",
    "Country 3",
    "Country 1",
    "Country 2",
    "Country 3",
    "Country 1",
    "Country 2",
    "Country 3",
    "Country 1",
    "Country 2",
    "Country 3",
    "Country 1",
    "Country 2",
    "Country 3",
    "Country 1",
    "Country 2",
    "Country 3",
    "Country 1",
    "Country 2",
    "Country 3",
    "Country 1",
    "Country 2",
    "Country 3",
  ];
  const dummyLanguages = [
    "Language 1",
    "Language 2",
    "Language 3",
    "Language 1",
    "Language 2",
    "Language 3",
    "Language 1",
    "Language 2",
    "Language 3",
    "Language 1",
    "Language 2",
    "Language 3",
    "Language 1",
    "Language 2",
    "Language 3",
    "Language 1",
    "Language 2",
    "Language 3",
    "Language 1",
    "Language 2",
    "Language 3",
    "Language 1",
    "Language 2",
    "Language 3",
  ];

  return (
    <Layout>
      <div className="lg:pl-32">
        <div className="w-full lg:w-3/4 flex justify-center ml-0 lg:ml-4 lg:justify-start mt-5 ">
          <RadioButtons />
        </div>
        <div className="hidden lg:block h-[1px] w-[80%] my-10 bg-gray-200"></div>
        <div className="options-section mt-10 px-4 lg:px-0 lg:mt-0 w-full lg:w-[80%] flex justify-between items-center lg:justify-end">
          <div className="mobile-filters lg:hidden">
            <span className="font-semibold">Filters:</span>
          </div>
          <div className="sort-section">
            <div className="flex text-black pl-6 font-semibold w-full items-baseline gap-2">
              <span>Order by:</span>
              <FormControl>
                <NativeSelect defaultValue={"type"}>
                  <option value={"type"}>Type</option>
                  <option value={"new"}>Newest</option>
                  <option value={"old"}>Oldest</option>
                  <option value={"asc"}>A-Z</option>
                  <option value={"desc"}>Z-A</option>
                </NativeSelect>
              </FormControl>
            </div>{" "}
          </div>
        </div>
        <div className="w-full border-black-100 flex flex-col lg:flex-row">
          <div className="left-side w-full lg:w-1/4 lg:px-8">
            <div className="mx-3 my-4">
              <SearchBar placeholder="Search" />
            </div>
            <div className="hidden lg:block filters-section">
              <div className="type-filters ">
                <h2 className="mb-2 text-[18px] font-semibold">Type</h2>
                <div className="pb-12 border-b border-gray-200">
                  <span className="w-full flex items-center flex-row-reverse justify-between">
                    <Switch defaultChecked color="warning" />
                    <label className="text-[#4B4B50] text-[14px]">
                      Toggle 1
                    </label>
                  </span>
                  <span className="w-full flex items-center flex-row-reverse justify-between">
                    <Switch defaultChecked color="warning" />
                    <label className="text-[#4B4B50] text-[14px]">
                      Toggle 1
                    </label>
                  </span>
                </div>
              </div>
              <div className="genre-filters ">
                <h2 className="my-4 text-[18px] font-semibold">Genre</h2>
                <div className="max-h-40 overflow-y-scroll pb-12 border-b border-gray-200">
                  <div>
                    {dummyGenres.map((genre, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={false}
                          // onChange={handleToggle1}
                        />
                        {genre}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="style-filters ">
                <h2 className="my-4 text-[18px] font-semibold">Style</h2>
                <div className="max-h-40 overflow-y-scroll pb-12 border-b border-gray-200">
                  <div>
                    {dummyStyles.map((style, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={false}
                          // onChange={handleToggle1}
                        />
                        {style}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              {/* Year Filter */}
              <div className="year-filters ">
                <h2 className="my-4 text-[18px] font-semibold">Year</h2>
                <div className="max-h-40 overflow-y-scroll pb-12 border-b border-gray-200">
                  <div>
                    {dummyYears.map((year, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={false}
                          // onChange={handleToggle1}
                        />
                        {year}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              {/* Author Filter */}
              <div className="author-filters">
                <h2 className="my-4 text-[18px] font-semibold">Author</h2>
                <div className="max-h-40 overflow-y-scroll pb-12 border-b border-gray-200">
                  <div>
                    {dummyAuthors.map((author, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={false}
                          // onChange={handleToggle1}
                        />
                        {author}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              {/* Country Filter */}
              <div className="country-filters ">
                <h2 className="my-4 text-[18px] font-semibold">Country</h2>
                <div className="max-h-40 overflow-y-scroll pb-12 border-b border-gray-200">
                  <div>
                    {dummyCountries.map((country, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={false}
                          // onChange={handleToggle1}
                        />
                        {country}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              {/* Language Filter */}
              <div className="language-filters ">
                <h2 className="my-4 text-[18px] font-semibold">Language</h2>
                <div className="max-h-40 overflow-y-scroll pb-12 border-b border-gray-200">
                  <div>
                    {dummyLanguages.map((language, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={false}
                          // onChange={handleToggle1}
                        />
                        {language}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
          {worksCardData === null ? (
            <div className="w-full flex justify-center items-center">
              <ClipLoader color="#c25b3c" size={45} />
            </div>
          ) : (
            <div className=" w-full lg:w-[70%] flex flex-wrap justify-center lg:justify-start gap-3">
              {worksCardData?.map((work: any, index: number) => (
                <Link href={{ pathname: `works/${work.id}`, query: work }}>
                  <div
                    className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                    key={index}
                  >
                    <WorkCard
                      imageUrl={
                        work?.attributes?.Titelbild?.data?.attributes?.url
                      }
                      isHomePageCard={false}
                      isType={true}
                      typeText={work.attributes.Art}
                      titleText={work.attributes.Titel}
                      footerText={work.attributes.Stil}
                      isfooterText={true}
                      hasVolumes={true}
                      noOfVolumes={work.attributes.AnzahlBuecher}
                      cardStyles={[]}
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="my-8 lg:my-36 flex justify-center">
          <Pagination
            size="small"
            total={totalRecords}
            current={currentPage}
            disabled={false}
            showSizeChanger
            pageSizeOptions={pageSizeOptions}
            onChange={handlePaginationChange}
          />
        </div>
      </div>
    </Layout>
  );
};

export default page;
