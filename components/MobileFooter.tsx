import React from "react";
import Image from "next/image";
import Link from "next/link";
const emailIcon = require("@/public/icons/Email_Icon@2x.png");
const phoneIcon = require("@/public/icons/phone Icon@2x.png");
const locationIcon = require("@/public/icons/Location_Icon@2x.png");

const MobileFooter = () => {
  return (
    <div className="bg-custom-offwhite ">
      <div className="w-full h-full gap-2 p-4 flex flex-col justify-center">
        <h1 className="text-[28px] text-custom-brown font-semibold">
          Feel free to contact us
        </h1>
        <p className="text-custom-gray text-[12px] font-normal">
          You have further questions or prefer the personal contact? We would be
          pleased to advise you in a non-binding consultation and show you the
          benefits of a membership. Simply call us or send us an e-mail with
          your request for contact. We are pleased to be of service for you.
        </p>
        <ul className="h-full justify-evenly flex flex-col">
          <li className="flex items-center gap-2 my-2">
            <Image src={phoneIcon} alt="phone" width={20} height={20} />
            <h2 className="text-[12px] text-custom-brown font-semibold">
              +49 (0)89 66 77 88 33
            </h2>
          </li>
          <li className="flex items-center gap-2 my-2">
            <Image src={emailIcon} alt="email" width={20} height={20} />
            <h2 className="text-[12px] text-custom-brown font-semibold">
              info@kollektiv-archiv.de
            </h2>
          </li>
          <li className="flex items-center gap-2 my-2">
            <Image src={locationIcon} width={20} height={20} alt="location" />
            <h2 className="text-[12px] text-custom-brown font-semibold">
              Tölzer Straße 1, 82031 Grünwald, Germany
            </h2>
          </li>
        </ul>
      </div>
      <div className="w-full mx-auto bg-custom-offwhite p-4 rounded-lg">
        <div className="mb-4 flex gap-12">
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Firstname*
            </label>
            <input
              type="text"
              required={true}
              placeholder="Name"
              className="border-b border-black bg-custom-offwhite focus:outline-none focus:border-blue-500 w-full py-2"
            />
          </div>
        </div>
        <div className="mb-4 flex gap-12">
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Lastname*
            </label>
            <input
              type="text"
              required={true}
              placeholder="Name"
              className="border-b border-black bg-custom-offwhite focus:outline-none focus:border-blue-500 w-full py-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input
            type="text"
            required={true}
            placeholder="Email"
            className="border-b border-black bg-custom-offwhite focus:outline-none focus:border-blue-500 w-full py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="text"
            required={true}
            placeholder="Email"
            className="border-b border-black bg-custom-offwhite focus:outline-none focus:border-blue-500 w-full py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block border-black bg-custom-offwhite text-sm font-bold mb-2">
            Message*
          </label>
          <input
            type="text"
            required={true}
            placeholder="Message"
            className="border-b border-black bg-custom-offwhite focus:outline-none focus:border-blue-500 w-full py-2"
          />
        </div>
        <div className="mb-4">
          <div className="py-3 flex items-center">
            <input
              type="checkbox"
              className="appearance-none border rounded-full border-custom-mobile-orange checked:appearance-auto checked:bg-custom-mobile-orange  focus:outline-none w-5 h-5 mr-2"
            />
            <span className="text-gray-600 text-sm">
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
      <div className="w-full bg-custom-mobile-orange p-2">
        <div className="nav-links text-white font-semibold">
          <ul className="flex justify-center gap-4">
            <li>
              <Link href="/#">About Us</Link>
            </li>
            <li>
              <Link href="/#">Our Mission</Link>
            </li>
            <li>
              <Link href="/#">Works</Link>
            </li>
            <li>
              <Link href="/#">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="info-links my-2">
          <ul className="flex justify-center gap-4 text-white font-semibold">
            <li>
              <Link href="/#">Legal</Link>
            </li>
            <li>
              <Link href="/#">Privacy</Link>
            </li>
            <li>
              <Link href="/#">Liability</Link>
            </li>
          </ul>
        </div>
        <div className="text-[14px] text-center my-2 text-white font-semibold">
          <h1>kollektiv archiv © 2023 All rights reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
