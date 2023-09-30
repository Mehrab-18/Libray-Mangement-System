import { Footer, NavBar } from "@/components";
import BindingForm from "@/components/BindingForm";
import Link from "next/link";
import CustomLink from "@/components/CustomLink";

function page() {
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

  return (
    <>
      <NavBar />
      <BindingForm />
      <div className="hidden lg:flex py-8 px-8 w-full fixed bottom-0 justify-between bg-custom-gray">
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
      </div>{" "}
      <div className="block lg:hidden bg-custom-offwhite">
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
      </div>{" "}
    </>
  );
}

export default page;
