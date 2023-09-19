import React from "react";
import Card from "@/components/Card";
import LibraryCard from "./LibraryCard";
import { LibraryCardProps, WorkCardProps } from "@/types";
import WorkCard from "./WorkCard";

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

const workCardStyles = [
  { originalBtnBgColor: "custom-offwhite", originalBtnColor: "black" },
];

const CardContainer: React.FC<CardContainerProps> = ({
  cards,
  isLibrary,
  libraryCards,
  workCards,
  isWork,
}) => {
  return (
    <div className="overflow-x-auto custom-scrollbar">
      <div className="flex space-x-2 ">
        {isLibrary
          ? libraryCards?.map((libraryCard, index) => (
              <LibraryCard
                id={1}
                libraryNumber={libraryCard.libraryNumber}
                works={libraryCard.works}
                dateofAddition={libraryCard.dateofAddition}
                isBtn1={libraryCard.isBtn1}
                btn1Text={libraryCard.btn1Text}
              />
            ))
          : isWork
          ? workCards?.map((work, index) => (
              <WorkCard
                isfooterText={true}
                imageUrl={work.imageUrl}
                isOriginal={work.isOriginal}
                originalText={work.originalText}
                description={work.description}
                footerText={work.footerText}
                cardStyles={workCardStyles}
              />
            ))
          : cards?.map((card, index) => (
              <Card
                key={index}
                imageUrl={card.imageUrl}
                footerText={card.footerText}
              />
            ))}
      </div>
    </div>
  );
};

export default CardContainer;
