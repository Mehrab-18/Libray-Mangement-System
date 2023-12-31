import React from "react";
import { HomeProps } from "@/types";
import { Footer, Hero, NavBar } from "@/components";
import PrivacyButton from "@/components/PrivacyButton";
const img1 = require("@/public/images/762.jpg").default;
import AboutUs from "@/components/About";
import Link from "next/link";
import Image from "next/image";
import "@/components/CardContainer";
import CardContainer from "@/components/CardContainer";
import Mission from "@/components/Mission";
import Overview from "@/components/Overview";
import imgProp from "@/public/images/Laptop_Asset.png";
import imgProp2 from "@/public/images/Kollektiv_documents.png";
import imgProp3 from "@/public/images/Showroom Books_Asset.png";
import HomeLibrarySection from "@/components/HomeLibrarySection";
import FAQ from "@/components/FAQ";
import Quotation from "@/components/Quotation";
import MobileFooter from "@/components/MobileFooter";
import StartWithUs from "@/components/StartWithUs";
import Showroom from "@/components/Showroom";
const book3 =
  require("@/public/images/Foto_11_01_70_01_58_40_copy_3837f10d48.png").default;
const book4 =
  require("@/public/images/Foto_11_01_70_02_14_11_copy_019975fe24.png").default;
const book9 = require("@/public/images/IMG_2758_copy_ac71ac5550.png").default;
const book10 = require("@/public/images/IMG_4251_copy_bb12520a0a.png").default;
const book11 = require("@/public/images/IMG_6477_copy_34d0993ee2.png").default;
const book12 = require("@/public/images/IMG_6940_718a97bc28.png").default;
const book13 = require("@/public/images/IMG_9172_af16c60681.PNG.jpg").default;
const libraryImg = require("@/public/images/Library_Img.png");

export default async function Home({ searchParams }: HomeProps) {
  const cards = [
    { imageUrl: book9, footerText: "Breviarium Grimani" },
    { imageUrl: book10, footerText: "Speyerer Evangelistar" },
    { imageUrl: book11, footerText: "Das Sakramentar Heinrichs II" },
    { imageUrl: book12, footerText: "Codex Etschmiadzin" },
    { imageUrl: book13, footerText: "Breviarium Grimani" },
    { imageUrl: book3, footerText: "Speyerer Evangelistar" },
    { imageUrl: book4, footerText: "Das Sakramentar Heinrichs II" },
    { imageUrl: book4, footerText: "Das Sakramentar Heinrichs II" },
  ];

  return (
    <main className="overflow-hidden">
      <div className="hidden lg:block">
        <PrivacyButton />
      </div>
      <NavBar />
      <Hero />
      <AboutUs />
      <div className="container ml-auto my-8 overflow-x-auto">
        <CardContainer cards={cards} />
      </div>
      <div className="w-full flex justify-center my-8">
        <Link href="/works" className="text-custom-mobile-orange ">
          Show all works
        </Link>
      </div>
      <div className="py-12">
        <Mission
          videoUrl="youtube.com/watch?v=J7bYXNM9oBQ"
          thumbnailUrl={img1}
        />
      </div>
      <div className="py-12">
        <Overview
          heading="Optimal Overview"
          paragraph="After logging in, you can edit the information for each book in your personal area and determine, for example, whether your work should be displayed to every user and which information may be visible. Of course, you can also add newly acquired works here and display a print preview. The latter is also available for users who are not logged in."
          imageUrl={imgProp}
          isOverview={true}
        />
      </div>
      <div className="py-12">
        <StartWithUs
          heading="That's how you start with us"
          paragraph="By registering with the book register of Kollektum GmbH, you bring your book collection into the digital age. You will then receive your membership card with your library number and a personal password. This way you can log in to the member area and make your library accessible to others."
          imageUrl={imgProp2}
          isOverview={false}
        />
      </div>
      <div className="py-12">
        <HomeLibrarySection />
      </div>
      <div className="py-12">
        <Showroom
          heading="Showroom"
          paragraph="By registering with the book register of Kollektum GmbH, you bring your book collection into the digital age. You will then receive your membership card with your library number and a personal password. This way you can log in to the member area and make your library accessible to others."
          imageUrl={imgProp3}
          isOverview={false}
        />
      </div>
      <div className="py-12">
        <h1 className="text-[#0D1118] text-[19px] font-semibold pl-12 lg:pl-24">
          Showroom Gallery
        </h1>
        <div className="container ml-auto my-8 overflow-x-auto ">
          <CardContainer isLibrary={true} />
        </div>
        <div className="w-full text-center">
          <Link
            href="/showrooms"
            className="text-custom-mobile-orange text-[16px] hover:text-custom-alert-orange"
          >
            Go to Showroom
          </Link>
        </div>
      </div>
      <div className="p-0  lg:p-12 block lg:ml-14 lg:flex w-full lg:w-5/6">
        <h1 className="text-custom-brown pl-3 lg:pl-0 text-start font-semibold w-full lg:w-5/12 text-[24px] lg:text-[20px]">
          Discover inspiring works.
        </h1>
        <p className="text-custom-gray text-[12px] font-light leading-5 p-3 lg:p-0 w-full lg:w-3/12">
          Browse through our new arrivals that have been registered recently or
          look through all facsimiles and other works. With just a few clicks
          you can filter by genres and other categories or search specifically
          for unique collectors’ items.
        </p>
      </div>
      <div className="py-12">
        <div className="container ml-auto my-8 overflow-x-auto ">
          <CardContainer isWork={true} />
        </div>
        <div className="w-full text-center">
          <Link
            href="/works"
            className="text-custom-mobile-orange text-[16px] hover:text-custom-alert-orange"
          >
            Show all works
          </Link>
        </div>
      </div>
      <div className="py-12 xl:mt-[175px] xl:h-[800px] my-10 bg-custom-offwhite w-full flex justify-center relative">
        <div className="hidden md:w-1/2 xl:block">
          <Image
            src={libraryImg}
            alt="library-img"
            // width={550}
            // height={550}
            className="top-[-5rem] left-[15rem] absolute w-32 h-32 lg:w-[400px] lg:h-[500px] 2xl:w-[550px] 2xl:h-[550px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <FAQ />
        </div>
      </div>
      <div className="py-34 lg:mb-[20rem] 2xl:mb-[24rem] lg:mt-10">
        <Quotation />
      </div>
      <div className="hidden lg:block py-34">
        <Footer />
      </div>
      <div className="py-34 block lg:hidden">
        <MobileFooter />
      </div>
    </main>
  );
}
