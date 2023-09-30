"use client";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
const emailIcon = require("@/public/icons/Email_Icon@2x.png");
const phoneIcon = require("@/public/icons/phone Icon@2x.png");
const locationIcon = require("@/public/icons/Location_Icon@2x.png");

const BindingForm = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-center lg:justify-between ">
        <div
          className="hidden lg:flex image-container"
          style={{ height: "1800px" }}
        >
          {/* <Image
            src={BindingImage}
            alt="Form Image"
            width={640}
            height={1800}
          /> */}
        </div>
        <div className="mx-4 w-full lg:w-1/2">
          <div className="mt-10 w-full lg:hidden ">
            <Link
              href={`/`}
              className="flex items-center text-custom-mobile-orange"
            >
              <IoIosArrowBack /> Back
            </Link>{" "}
          </div>
          <div className="headings">
            <h1 className="mt-6 lg:mt-20 text-[25px] lg:text-[50px] font-semibold">
              Ask us for a non-binding offer
            </h1>
            <h4 className="mt-4 lg:w-3/4 text-[#4B4B50] text[15px] lg:text-[16px]">
              For a non-binding offer you can also contact our phone support.
              Our team would love to discuss this with you.
            </h4>
          </div>
          <div className="customer-data">
            <h2 className="text-[20px] font-semibold mt-12 mb-6">
              Customer data
            </h2>
            <div className="flex flex-wrap justify-start gap-6">
              <div className="w-[90%] lg:w-[40%] mb-4">
                <label className="block text-[#4B4B50] text-[10px]">
                  Firstname*
                </label>
                <input
                  type="text"
                  required={true}
                  placeholder="Firstname"
                  className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                />
              </div>
              <div className="w-[90%] lg:w-[40%] mb-4">
                <label className="block text-[#4B4B50] text-[10px] ">
                  Lastname*
                </label>
                <input
                  type="text"
                  required={true}
                  placeholder="Lastname"
                  className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                />
              </div>
              <div className="w-[90%] lg:w-[40%] mb-4">
                <label className="block text-[#4B4B50] text-[10px] ">
                  Phone*
                </label>
                <input
                  type="text"
                  required={true}
                  placeholder="Phone"
                  className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                />
              </div>
              <div className="w-[90%] lg:w-[40%] mb-4">
                <label className="block text-[#4B4B50] text-[10px] ">
                  Birthday
                </label>
                <input
                  type="text"
                  required={false}
                  placeholder="Birthday"
                  className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                />
              </div>
              <div className="w-[90%] lg:w-[83%] mb-4">
                <label className="block text-[#4B4B50] text-[10px] ">
                  Email
                </label>
                <input
                  type="text"
                  required={false}
                  placeholder="Email"
                  className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                />
              </div>
            </div>
          </div>
          <div className="address">
            <h2 className="text-[20px] font-semibold my-6">Address</h2>
            <div className="flex flex-wrap justify-start gap-6">
              <div className="w-[90%] lg:w-[40%] mb-4">
                <label className="block text-[#4B4B50] text-[10px] ">
                  Street/house number
                </label>
                <input
                  type="text"
                  required={false}
                  placeholder="Street/house number"
                  className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                />
              </div>
              <div className="w-[90%] lg:w-[40%] mb-4">
                <label className="block text-[#4B4B50] text-[10px] ">
                  City
                </label>
                <input
                  type="text"
                  required={false}
                  placeholder="City"
                  className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                />
              </div>
              <div className="w-[90%] lg:w-[40%] mb-4">
                <label className="block text-[#4B4B50] text-[10px] ">
                  Postal
                </label>
                <input
                  type="text"
                  required={false}
                  placeholder="Postal"
                  className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                />
              </div>
              <div className="w-[90%] lg:w-[40%] mb-4">
                <label className="block text-[#4B4B50] text-[10px] ">
                  Country
                </label>
                <input
                  type="text"
                  required={false}
                  placeholder="Country"
                  className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                />
              </div>
            </div>
          </div>
          <div className="additional-information ">
            <h2 className="text-[20px] font-semibold my-6">
              Additional Information
            </h2>
            <div className="w-[90%] lg:w-[83%] mb-4">
              <label className="block text-[#4B4B50] text-[10px] ">
                How many works do you want to register?
              </label>
              <input
                type="text"
                required={false}
                placeholder="Amount of works"
                className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
              />
            </div>
            <div className="w-[90%] lg:w-[83%] mb-4">
              <label className="block text-[#4B4B50] text-[10px] ">
                How did you hear about us?
              </label>
              <input
                type="text"
                required={false}
                placeholder="How did you hear about us?"
                className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
              />
            </div>
          </div>
          <div className="doc-upload ">
            <h2 className="text-[20px] font-semibold my-6">
              Upload Attachment
            </h2>
            <div className="w-[90%] lg:w-1/2 mb-8 relative">
              <input
                type="file"
                className="bg-white hover:bg-[#415479] hover:text-white text-[#415479] text-center text-[16px] font-semibold border border-[#415479] w-3/4 py-2 px-4 rounded-full cursor-pointer absolute opacity-0"
              />
              <span className="w-[60%] lg:w-1/2 h-12 flex gap-1 justify-center items-center px-4 py-2 text-center border border-[#415479] bg-white text-[#415479] transition duration-300 ease-in-out rounded-full relative z-10">
                <LuUpload /> Submit
              </span>
            </div>
            <div className="w-full lg:w-[60%] mb-4">
              <div className="flex">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    className="appearance-none border rounded-full border-custom-mobile-orange checked:appearance-auto checked:bg-custom-mobile-orange focus:outline-none w-[46px] h-[16px] lg:h-5 lg:w-8 mr-2"
                  />
                  <span className="text-gray-600 text-sm">
                    Yes, I agree that my data will be processed in accordance
                    with this data protection declaration for the purpose of
                    establishing contact.
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="submit-btn">
            <div className="mt-6 w-[90%] mb-8">
              <button className="h-12 w-full lg:w-[60%] flex gap-1 justify-center items-center px-4 py-2 text-center border border-[#415479] bg-white text-[#415479] transition duration-300 ease-in-out rounded-full relative z-10">
                Submit
              </button>
            </div>
          </div>
          <div className="contact-info">
            <div className="w-[90%] mb-16">
              <h3 className="mb-6 text-[16px] text-[16px]">
                We are available for you 24/7. You can reach us at:
              </h3>
              <ul className="h-full gap-4 justify-evenly flex flex-col">
                <li className="flex items-center gap-2 my-2">
                  <Image src={phoneIcon} alt="phone" width={15} height={25} />
                  <h2 className="text-[20px] font-semibold">
                    +49 (0)89 66 77 88 33
                  </h2>
                </li>
                <li className="flex items-center gap-2 my-2">
                  <Image src={emailIcon} alt="email" width={15} height={25} />
                  <h2 className="text-[20px] font-semibold">
                    info@kollektiv-archiv.de
                  </h2>
                </li>
                <li className="flex items-center gap-2 my-2">
                  <Image
                    src={locationIcon}
                    width={15}
                    height={25}
                    alt="location"
                  />
                  <h2 className="text-[20px] font-semibold">
                    Tölzer Straße 1, 82031 Grünwald, Germany
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BindingForm;
