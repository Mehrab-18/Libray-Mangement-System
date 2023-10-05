"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginModal from "./LoginModal";
const logo = require("@/public/images/LOGO 2_2.svg");
const desklogo = require("@/public/images/desklogo.png");

import { FiMenu, FiX } from "react-icons/fi"; // Example icons (you can use any icon from the library)
import { NavLinkProps } from "@/types";
import { CustomButton } from ".";
import { FaRegUser } from "react-icons/fa";
import CustomLink from "./CustomLink";
import { useUserObj } from "@/app/UserContext";
const callIcon = require("@/public/icons/Contact Us_Button_Header.svg");
const worldIcon = require("@/public/icons/World_Icon.svg");

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [path, setPath] = useState<any>();
  const { user, isLoggedIn } = useUserObj();

  useEffect(() => {
    const currentPath = window.location.pathname;
    setPath(currentPath);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const handleLoginModalMobile = () => {
    setIsOpen(false);
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const publicLinks: any = [
    {
      url: "/works",
      title: "Works",
      customStyles: `${isOpen ? "text-white" : "text-black"}`,
      isActive: false,
    },
    {
      url: "/about",
      title: "About Us",
      customStyles: `${isOpen ? "text-white" : "text-black"}`,
      isActive: false,
    },
    {
      url: "/mission",
      title: "Our Mission",
      customStyles: `${isOpen ? "text-white" : "text-black"}`,
      isActive: false,
    },
    {
      url: "/showroom",
      title: "Showroom",
      customStyles: `${isOpen ? "text-white" : "text-black"}`,
      isActive: false,
    },
  ];

  // console.log("here is user", user);

  return (
    <header className="bg-white w-full z-10 shadow-md">
      <nav className="w-full bg-transparent py-4 flex justify-end items-center">
        <div className="w-full lg:w-full flex lg:justify-between items-center">
          <div className="w-full h-full lg:pl-0 pl-[2.5rem]">
            <Link href="/" className="flex justify-center items-center">
              <Image
                src={desklogo}
                alt="logo"
                width={180}
                height={18}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="hidden lg:block w-[40%]">
            <ul className="flex justify-center space-x-6">
              {publicLinks.map((link: any, index: number) => (
                <li key={index}>
                  <Link href={link.url} className={link.customStyles}>
                    <span
                      className={
                        path === link.url
                          ? `font-semibold text-[#c25b3c]`
                          : `hover:text-[#c25b3c] hover:font-semibold`
                      }
                    >
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden w-[35%] lg:flex justify-center items-center gap-4">
            <div className="flex justify-between items-center gap-2">
              <Image src={worldIcon} alt="world-icon" />
              <h1 className="font-semibold">DE</h1>
              <span>|</span>
              <h1 className="text-custom-mobile-orange font-semibold">EN</h1>
            </div>
            <button
              className="text-white rounded-full flex flex-row items-center justify-center gap-2 bg-custom-gray px-6 h-10"
              onClick={handleLoginModal}
            >
              <span>
                <FaRegUser />
              </span>
              <span>{!isLoggedIn ? "Login" : "Logout"}</span>
            </button>
            <div>
              <Image src={callIcon} width={45} height={45} alt="call-icon" />
            </div>
          </div>
        </div>
        <div className="lg:hidden mr-4">
          {isOpen ? (
            <FiX
              className="text-black cursor-pointer text-2xl"
              onClick={toggleMenu}
            />
          ) : (
            <FiMenu
              className="text-black cursor-pointer text-2xl"
              onClick={toggleMenu}
            />
          )}
        </div>
      </nav>
      {isOpen && (
        <div className="bg-custom-mobile-orange w-screen h-screen flex flex-col justify-around items-center">
          <ul className="h-1/3 flex flex-col justify-evenly items-center space-x-0 lg:space-x-6">
            {publicLinks.map((link: any, index: number) => (
              <li key={index}>
                <CustomLink
                  url={link.url}
                  title={link.title}
                  customStyles={link.customStyles}
                />
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center">
            <Link href={'/works'}>
              <CustomButton
                title="All Works"
                btnType="button"
                containerStyles="text-black rounded-full font-extrabold	 bg-white min-w-[190px]"
              />
            </Link>
          </div>
          <div className="w-1/3 flex justify-evenly font-extrabold	 items-center">
            {isLoggedIn ? (
              <div onClick={toggleMenu}>
                <CustomButton
                  title="logout"
                  btnType="button"
                  containerStyles="text-custom-mobile-orange rounded-full bg-white min-w-[120px]"
                />
              </div>
            ) : (
              <div onClick={handleLoginModalMobile}>
                <CustomButton
                  title="Login"
                  btnType="button"
                  containerStyles="text-custom-mobile-orange rounded-full bg-white "
                />
              </div>
            )}
          </div>
        </div>
      )}
      {isLoginModalOpen && (
        <LoginModal modal={isLoginModalOpen} setModal={setIsLoginModalOpen} />
      )}
    </header>
  );
}

export default MobileNavBar;
