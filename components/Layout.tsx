// components/Layout.tsx
import React, { ReactNode } from "react";
import { NavBar } from ".";
import CustomLink from "./CustomLink";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
      url: "/#",
      title: "Legal",
      customStyles: "text-white text-[16px] font-semibold",
    },
    {
      url: "/#",
      title: "Privacy",
      customStyles: "text-white text-[16px] font-semibold",
    },
    {
      url: "/#",
      title: "Liability",
      customStyles: "text-white text-[16px] font-semibold",
    },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="flex-grow min-h-screen" >{children}</main>
      <div className="hidden bottom-0 lg:flex py-8 px-8 w-full justify-between bg-custom-gray">
        <div className="w-fit text-white text-[13px] font-semibold">
          kollektiv archiv GmbH © 2023 All rights reserved
        </div>
        <div className="w-fit">
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
        <div className="w-fit">
          <ul className="flex justify-end gap-12">
            {footerLinks.map((link, index) => (
              <li key={index} className="text-[13px]">
                <CustomLink
                  url={link.url}
                  title={link.title}
                  customStyles={link.customStyles}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>{" "}
      <div className="block lg:hidden bg-custom-offwhite">
        <div className="w-full bg-custom-mobile-orange p-2">
          <div className="nav-links text-white text-[13px] font-semibold">
            <ul className="flex justify-center gap-4 ">
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
    </div>
  );
};

export default Layout;
