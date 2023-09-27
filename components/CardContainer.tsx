"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import LibraryCard from "./LibraryCard";
import { LibraryCardProps, WorkCardProps } from "@/types";
import WorkCard from "./WorkCard";
import { getHomeWorks, getSpecialWorks } from "@/api/works";
import { getHomepageLibraries } from "@/api/libraries";

interface CardData {
  imageUrl: string;
  footerText: string;
}

interface CardContainerProps {
  cards?: CardData[];
  libraryCards?: LibraryCardProps[];
  isLibrary?: boolean;
  isWork?: boolean;
  workCards?: WorkCardProps[];
}

const CardContainer: React.FC<CardContainerProps> = ({
  cards,
  isLibrary,
  libraryCards,
  isWork,
}) => {
  const [homeBooks, setHomeBooks] = useState<any>();
  const [homeWorks, setHomeWorks] = useState<any>();
  const [homeLibraries, setHomeLibraries] = useState<any>();

  useEffect(() => {
    getHomeBooks();
    getWorks();
    getLibraries();
  }, []);

  const getHomeBooks = async () => {
    const res: any = await getSpecialWorks();
    setHomeBooks(res?.data.data.attributes.stammwerkes?.data);
  };

  const getWorks = async () => {
    const res = await getHomeWorks();
    setHomeWorks(res?.data?.data);
  };

  const getLibraries = async () => {
    const res = await getHomepageLibraries();
    setHomeLibraries(res?.data?.data);
  };

  const calculateLibraryWorks = (library: any) => {
    if (library) {
      return library.besitzes.length;
    }
  };

  function formatDateToDDYYYYMM(dateString: string) {
    const createdAtDate = new Date(dateString);

    const year = createdAtDate.getFullYear();
    const month = String(createdAtDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-indexed
    const day = String(createdAtDate.getDate()).padStart(2, "0");

    const formattedDate = `${day}-${year}-${month}`;

    return formattedDate;
  }

  return (
    <div className="overflow-x-auto custom-scrollbar">
      <div className="flex space-x-2 ">
        {isLibrary
          ? homeLibraries?.map((libraryCard: any, index: any) => (
              <LibraryCard
                id={libraryCard.id}
                libraryNumber={libraryCard.username}
                works={calculateLibraryWorks(libraryCard)}
                dateofAddition={formatDateToDDYYYYMM(libraryCard?.createdAt)}
                isBtn1={true}
                btn1Text={"Go to Library"}
                isRecommended={true}
                condition={"premium"}
              />
            ))
          : isWork
          ? homeWorks?.map((work: any, index: number) => (
              <WorkCard
                imageUrl={work.attributes.Titelbild?.data?.attributes?.url}
                // isOriginal={work.attributes}
                // originalText={work.originalText}
                // description={work.description}
                isfooterText={true}
                footerText={work.attributes.Genre}
                // cardStyles={workCardStyles}
                isType={true}
                typeText={work.attributes.Art}
                hasVolumes={false}
                // noOfVolumes={2}
                titleText={work.attributes.Titel}
                // isfooterText2={true}
                // footerText2={"Condition: very good"}
              />
            ))
          : homeBooks?.map((work: any, index: number) => (
              <Card
                key={index}
                imageUrl={work.attributes.Titelbild?.data?.attributes?.url}
                footerText={work.attributes.Titel}
              />
            ))}
      </div>
    </div>
  );
};

export default CardContainer;
