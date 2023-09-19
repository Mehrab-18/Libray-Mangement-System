import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import LibraryCard from "@/components/LibraryCard";
const book9 = require("@/public/images/IMG_2758_copy_ac71ac5550.png").default;
const book10 = require("@/public/images/IMG_4251_copy_bb12520a0a.png").default;
const book11 = require("@/public/images/IMG_6477_copy_34d0993ee2.png").default;
const book12 = require("@/public/images/IMG_6940_718a97bc28.png").default;
const book13 = require("@/public/images/IMG_9172_af16c60681.PNG.jpg").default;

const page = () => {
  const libraryCards = [
    {
      id: 1,
      libraryNumber: "2023 9876 5432",
      works: 8,
      dateofAddition: "22.09.2023",
    },
    {
      id: 2,
      libraryNumber: "2023 5678 1234",
      works: 3,
      dateofAddition: "10.07.2023",
    },
    {
      id: 3,
      libraryNumber: "2023 1111 2222",
      works: 12,
      dateofAddition: "01.12.2023",
    },
    {
      id: 4,
      libraryNumber: "2023 6543 7890",
      works: 6,
      dateofAddition: "05.06.2023",
    },
  ];

  return (
    <Layout>
      <div>
        <div className="breadcrumbs">
          <div className="w-full lg:w-1/4 ">
            <Link
              href={`/libraries`}
              className="flex items-center pl-12 text-custom-mobile-orange"
            >
              <IoIosArrowBack /> Back
            </Link>{" "}
          </div>
        </div>
        <div className="product-intro w-full flex justify-center gap-12 ">
          <div className="product-img w-1/4 flex justify-center ">
            <Image src={book10} alt="product-img" width={350} />
          </div>
          <div className="product-details w-1/2 flex flex-col justify-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-custom-mobile-orange">Object data</h3>
              <h1 className="text-custom-brown text-[25px]">Aratea Vaticana</h1>
            </div>
            <div className="condition flex w-1/2 justify-start gap-6 my-6">
              <div className="text-custom-gray">
                Condition: <span className="text-custom-brown">sehr gut</span>
              </div>
              <div className="text-custom-mobile-orange">
                Library: 2023 1010 1010
              </div>
            </div>
            <div className="flex w-1/2 justify-start gap-6 mt-8 items-center">
              <div className="w-1/3">
                <button className="rounded-full w-full border border-custom-mobile-orange text-black p-1">
                  Inquire work
                </button>
              </div>
              <div className="text-custom-mobile-orange text-[16px]">
                Work's data
              </div>
            </div>
          </div>
        </div>
        <div className="product-info my-12 py-12 w-full flex justify-evenly border-t border-b border-custom-offwhite">
          <div className="info-section w-[15%] text-center">
            <h3 className="text-custom-mobile-orange text-[16px]">Type</h3>
            <h1 className="text-custom-brown text-[20px]">Faksimile</h1>
          </div>
          <div className="info-section w-[15%] text-center">
            <h3 className="text-custom-mobile-orange text-[16px]">Genre</h3>
            <h1 className="text-custom-brown text-[20px]">
              Astonomie | Astologie
            </h1>
          </div>
          <div className="info-section w-[15%] text-center">
            <h3 className="text-custom-mobile-orange text-[16px]">Style</h3>
            <h1 className="text-custom-brown text-[20px]">Renaissance</h1>
          </div>
          <div className="info-section w-[15%] text-center">
            <h3 className="text-custom-mobile-orange text-[16px]">Year</h3>
            <h1 className="text-custom-brown text-[20px]">Ab 1450</h1>
          </div>
          <div className="info-section w-[15%] text-center">
            <h3 className="text-custom-mobile-orange text-[16px]">Author</h3>
            <h1 className="text-custom-brown text-[20px]">Ferdinand I.,</h1>
            <h1 className="text-custom-brown text-[20px]">
              {" "}
              König von Neapel,
            </h1>
            <h1 className="text-custom-brown text-[20px]">
              oder sein Sohn Giovanni (Auftraggeber)
            </h1>
          </div>
          <div className="info-section w-[15%] text-center">
            <h3 className="text-custom-mobile-orange text-[16px]">Country</h3>
            <h1 className="text-custom-brown text-[20px]">Italien</h1>
          </div>
        </div>
        <div className="product-origin my-6 py-12 flex justify-center">
          <div className="info-section w-[15%] flex items-center gap-2">
            <h3 className="text-custom-mobile-orange text-[16px]">Volumes</h3>
            <h1 className="text-custom-brown text-[20px]">1</h1>
          </div>
          <div className="info-section w-[15%] flex items-center gap-2">
            <h3 className="text-custom-mobile-orange text-[16px]">
              Total amount of pages
            </h3>
            <h1 className="text-custom-brown text-[20px]">200</h1>
          </div>
          <div className="info-section w-[15%] flex items-center gap-2">
            <h3 className="text-custom-mobile-orange text-[16px]">Language</h3>
            <h1 className="text-custom-brown text-[20px]">Latien</h1>
          </div>
          <div className="info-section w-[15%] flex items-center gap-2">
            <h3 className="text-custom-mobile-orange text-[16px]">Century</h3>
            <h1 className="text-custom-brown text-[20px]">XIV</h1>
          </div>
        </div>
        <div className="product-remarks flex justify-center gap-8">
          <div className="info w-[45%]">
            <h1 className="text-[25px] text-custom-brown font-semibold mb-4">
              Info
            </h1>
            <p className="text-justify">
              Die Aratea Vaticana ist ein astronomisches Lehrbuch, das auf dem
              antiken Text Phainomena von Aratos von Soloi basiert. Es enthält
              40 prächtige Miniaturen mit Goldverzierungen, die Planeten,
              Himmelserscheinungen und Wetterzeichen erklären. Das komplexe
              astronomische Wissen wird dem Leser durch mythologische
              Geschichten und Figuren vermittelt, die kunstvoll von Matteo
              Felice, dem Buchmaler, dargestellt werden. Die Prachthandschrift
              wurde in der zweiten Hälfte des 15. Jahrhunderts für König
              Ferdinand I. von Neapel oder seinen Sohn Johannes erstellt und ist
              ein beeindruckendes Beispiel für die frühe Renaissance in Italien.
              Später erhielt sie einen barocken Samteinband mit kostbaren
              Stickereien im Auftrag des Kardinals Maffeo Barberini, der später
              Papst Urban VIII. wurde.
            </p>
          </div>
          <div className="remarks w-[45%]">
            <h1 className="text-[25px] text-custom-brown font-semibold mb-4">
              Remarks
            </h1>
            <p className="text-justify">
              The cover is crafted from black cabra leather and features silver
              embossing on the cover and spine. An audio pen is included.
            </p>
          </div>
        </div>
        <div className="product-gallery container mx-auto my-8 max-w-screen-lg overflow-x-auto">
          <h1 className="my-8 text-custom-brown text-[20px] font-semibold">
            Photo Gallery
          </h1>
          <div className="overflow-x-auto custom-scrollbar">
            <div className="flex space-x-2">
              <div className="min-w-[250px] h-96 m-2 overflow-hidden">
                <Image src={book10} alt="img" />
              </div>
              <div className="min-w-[250px] h-96 m-2 overflow-hidden">
                <Image src={book9} alt="img" />
              </div>
              <div className="min-w-[250px] h-96 m-2 overflow-hidden">
                <Image src={book12} alt="img" />
              </div>
              <div className="min-w-[250px] h-96 m-2 overflow-hidden">
                <Image src={book11} alt="img" />
              </div>
              <div className="min-w-[250px] h-96 m-2 overflow-hidden">
                <Image src={book13} alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="libraries-list flex flex-col items-center">
          <h1 className="pl-24 my-8 text-custom-brown text-[20px] font-semibold self-start">
            Libraries containing this work
          </h1>
          <div className="w-3/4 flex flex-wrap gap-4">
            {libraryCards.map((library, index) => (
              <LibraryCard
                libraryNumber={library.libraryNumber}
                id={library.id}
                works={library.works}
                dateofAddition={library.dateofAddition}
                isRecommended={false}
                isBtn1={true}
                btn1Text={"Go to library"}
                isBtn2={true}
                btn2Text={"Go to object"}
              />
            ))}
          </div>
        </div>
        <div className="my-8 page-end">
          <div className="w-full lg:w-1/4">
            <Link
              href={`/libraries`}
              className="flex items-center pl-12 text-custom-mobile-orange"
            >
              <IoIosArrowBack /> Back
            </Link>{" "}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
