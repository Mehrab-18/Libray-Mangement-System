import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";
import CustomLink from "./CustomLink";
import MobileFooter from "./MobileFooter";
const emailIcon = require("@/public/icons/Email_Icon@2x.png");
const phoneIcon = require("@/public/icons/phone Icon@2x.png");
const locationIcon = require("@/public/icons/Location_Icon@2x.png");

const footerImg = require("@/public/images/Library_Background_Footer.png");

const Footer = () => {
  const publicLinks = [
    {
      url: "/works",
      title: "Works",
      customStyles: "text-white text-[16px] font-semibold",
    },
    {
      url: "/about",
      title: "About Us",
      customStyles: "text-white text-[16px] font-semibold",
    },
    {
      url: "/mission",
      title: "Our Mission",
      customStyles: "text-white text-[16px] font-semibold",
    },
    {
      url: "/showroom",
      title: "Showroom",
      customStyles: "text-white text-[16px] font-semibold",
    },
  ];

  const footerLinks = [
    {
      url: "/legal",
      title: "Legal",
      customStyles: "text-white text-[16px] font-semibold",
    },
    {
      url: "/privacy",
      title: "Privacy",
      customStyles: "text-white text-[16px] font-semibold",
    },
    {
      url: "/liability",
      title: "Liability",
      customStyles: "text-white text-[16px] font-semibold",
    },
  ];

  return (
    <footer className="text-black-100 mt-12 border-t border-gray-100">
      <div className="w-full relative">
        <div>
          <Image
            src={footerImg}
            alt="library-background"
            className="w-full object-cover h-[300px]"
          />
        </div>
        <div className="hidden lg:flex w-full lg:w-1/2 h-[81vh] py-[25px] bg-custom-offwhite absolute top-[-8rem] lg:top-[-16rem] left-[25%] right-[25%]">
          <div className="w-1/2 h-full gap-2 p-12 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold text-black   lg:text-[25px] lg:text-custom-brown lg:font-semibold">
              Feel free to <br /> contact us !
            </h1>
            <p className="text-custom-gray text-[11px] lg:pb-8 lg:w-[250px] font-normal">
              You have further questions or prefer the personal contact? We
              would be pleased to advise you in a non-binding consultation and
              show you the benefits of a membership. Simply call us or send us
              an e-mail with your request for contact. We are pleased to be of
              service for you.
            </p>
            <ul className="h-full justify-evenly flex flex-col">
              <li className="flex items-center gap-2 my-2">
                <Image src={phoneIcon} alt="phone" width={12} height={12} />
                <h2 className="text-[12px] text-custom-brown font-semibold">
                  +49 (0)89 66 77 88 33
                </h2>
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={emailIcon} alt="email" width={17} height={17} />
                <h2 className="text-[12px] text-custom-brown font-semibold">
                  info@kollektiv-archiv.de
                </h2>
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image
                  src={locationIcon}
                  width={15}
                  height={15}
                  alt="location"
                />
                <h2 className="text-[12px] text-custom-brown font-semibold">
                  Tölzer Straße 1, 82031 Grünwald, Germany
                </h2>
              </li>
            </ul>
          </div>
          <div className="w-1/2 mx-auto bg-custom-offwhite p-6 pr-7 rounded-lg">
            <div className="mb-4 flex gap-5">
              <div className="w-1/2 lg:mt-6">
                <label className="block text-gray-700 text-xs font-bold mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  required={true}
                  placeholder="Name"
                  className="border-b border-black bg-custom-offwhite focus:outline-none focus:border-blue-500 w-full py-1"
                />
              </div>
              <div className="w-1/2 lg:mt-6">
                <label className="block text-gray-700 text-xs font-bold mb-1">
                  Phone*
                </label>
                <input
                  type="text"
                  required={true}
                  placeholder="Phone"
                  className="border-b border-black bg-custom-offwhite focus:outline-none focus:border-blue-500 w-full py-1"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-xs font-bold mb-1">
                Email
              </label>
              <input
                type="text"
                required={true}
                placeholder="Email"
                className="border-b border-black bg-custom-offwhite focus:outline-none focus:border-blue-500 w-full py-1"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700  text-xs font-bold mb-1">
                Message Subject*
              </label>
              <input
                type="text"
                required={true}
                placeholder="Message Subject"
                className="border-b border-black bg-custom-offwhite focus:outline-none focus:border-blue-500 w-full py-2"
              />
            </div>
            <div className="mb-2">
              <label className="block border-black bg-custom-offwhite text-xs font-bold mb-1">
                Message*
              </label>
              <input
                type="text"
                required={true}
                placeholder="Message"
                className="border-b border-black bg-custom-offwhite focus:outline-none focus:border-blue-500 w-full py-2"
              />
            </div>
            <div className="mb-3">
              <div className="py-3 flex items-center">
                <input
                  type="checkbox"
                  className="appearance-none border rounded-full border-custom-mobile-orange checked:appearance-auto checked:bg-custom-mobile-orange  focus:outline-none w-5 h-5 mr-2"
                />
                <span className="text-gray-600 text-xs">
                  By submitting I accept the privacy statement.
                </span>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-custom-mobile-orange w-full hover:bg-custom-alert-orange text-white font-bold py-2 px-4 rounded-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 px-8 w-full flex justify-between bg-custom-gray">
        <div className="w-1/4 text-white text-[16px] font-semibold">
          kollektiv archiv GmbH © 2023 All rights reserved
        </div>
        <div className="w-1/2">
          <ul className="flex justify-center gap-12">
            {publicLinks.map((link, index) => (
              <li key={index}>
                <CustomLink
                  url={link.url}
                  title={link.title}
                  customStyles={link.customStyles}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/5">
          <ul className="flex justify-end gap-12">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <CustomLink
                  url={link.url}
                  title={link.title}
                  customStyles={link.customStyles}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
