"use client";
import { useState, ChangeEvent, useRef } from "react";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";
// const BindingImage = require("@/public");
const emailIcon = require("@/public/icons/Email_Icon@2x.png");
const phoneIcon = require("@/public/icons/phone Icon@2x.png");
const locationIcon = require("@/public/icons/Location_Icon@2x.png");

const BindingForm = () => {
  const [name, setName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [birthday, setBirthday] = useState<string | number>();
  const [phone, setPhone] = useState<string | number>();
  const [email, setEmail] = useState<string | number>();
  const [streetHouse, setStreetHouse] = useState<string | number>();
  const [postal, setPostal] = useState<string | number>();
  const [city, setCity] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [works, setWorks] = useState<string>();
  const [hear, setHear] = useState<string>();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<any>(null); // Initialize with null

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const handleBirthday = (e: ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.target.value);
  };
  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleStreetHouse = (e: ChangeEvent<HTMLInputElement>) => {
    setStreetHouse(e.target.value);
  };
  const handlePostal = (e: ChangeEvent<HTMLInputElement>) => {
    setPostal(e.target.value);
  };
  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handleCountry = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  const handleWorks = (e: ChangeEvent<HTMLInputElement>) => {
    setWorks(e.target.value);
  };
  const handleHear = (e: ChangeEvent<HTMLInputElement>) => {
    setHear(e.target.value);
  };

  const handleSubmit = () => {
    // Ensure formRef is not null
    if (formRef.current) {
      // Create FormData object directly from the form element
      const formData = new FormData(formRef.current);

      // Build the email body with line breaks
      const emailBody = `
  Name: ${formData.get("name")} ${formData.get("lastName")}
  Birthday: ${formData.get("birthday")}
  Phone: ${formData.get("phone")}
  Email: ${formData.get("email")}
  Street/House: ${formData.get("streetHouse")}
  Postal: ${formData.get("postal")}
  City: ${formData.get("city")}
  Country: ${formData.get("country")}
  Works: ${formData.get("works")}
  Hear: ${formData.get("hear")}
  `.trim(); // Remove leading/trailing white space

      // URL encode the email body
      const encodedEmailBody = encodeURIComponent(emailBody);

      // Construct the mailto link
      const mailtoLink = `mailto:recipient@example.com?subject=Form Submission&body=${encodedEmailBody}`;

      // Open the email client
      window.location.href = mailtoLink;

      setFormSubmitted(true);
    }
  };

  return (
    <>
      <div className="w-[90%] lg:flex lg:flex-row lg:justify-between border border-black-100">
        <div
          className="border border-black-100 image-container"
          style={{ height: "1800px" }}
        >
          {/* <Image
            src={BindingImage}
            alt="Form Image"
            width={640}
            height={1800}
          /> */}
        </div>
        <div className="w-1/2 lg:mt-20 ">
          <div className="text-3xl text-black font-bold mb-6">
            Ask us for a non-binding offer.
          </div>
          <div className="text-xs mb-12">
            For a non-binding offer you can also contact our phone support. Our
            team would love to discuss <br /> this with you.
          </div>
          <div className="text-sm text-black font-semibold">Customer Data</div>
          <form ref={formRef}>
            <div className="flex flex-row gap-5 mb-3">
              <div className=" w-[280px] lg:mt-6">
                <label className="block text-gray-700 text-xs font-bold mb-1">
                  Firstname
                </label>
                <input
                  type="text"
                  required={true}
                  value={name}
                  onChange={handleName}
                  placeholder="Firstname"
                  className="border-b border-black  focus:outline-none focus:border-blue-500 w-[280px] py-1"
                />
              </div>
              <div className=" w-[280px] lg:mt-6">
                <label className="block text-gray-700 text-xs font-bold mb-1">
                  Lastname
                </label>
                <input
                  type="text"
                  required={true}
                  value={lastName}
                  onChange={handleLastName}
                  placeholder="Lastname"
                  className="border-b border-black  focus:outline-none focus:border-blue-500 w-[280px] py-1"
                />
              </div>
            </div>
            <div className="flex flex-row gap-5 mb-3">
              <div className=" w-[280px] lg:mt-6">
                <label className="block text-gray-700 text-xs font-bold mb-1">
                  Birthday
                </label>
                <input
                  type="text"
                  required={true}
                  value={birthday}
                  onChange={handleBirthday}
                  placeholder="Birthday"
                  className="border-b border-gray-400  focus:outline-none focus:border-blue-500 w-[280px] py-1"
                />
              </div>
              <div className=" w-[280px] lg:mt-6">
                <label className="block text-gray-700 text-xs font-bold mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  required={true}
                  value={phone}
                  onChange={handlePhone}
                  placeholder="De (49) Phone"
                  className="border-b border-gray-400  focus:outline-none focus:border-blue-500 w-[280px] py-1"
                />
              </div>
            </div>
            <div className=" w-[580px] lg:mt-6">
              <label className="block text-gray-700 text-xs font-bold mb-1">
                Email
              </label>
              <input
                type="text"
                required={true}
                value={email}
                onChange={handleEmail}
                placeholder="Email"
                className="border-b border-black  focus:outline-none focus:border-blue-500 w-[580px] py-1"
              />
            </div>
            <div className="text-sm text-black font-semibold mt-20">
              Address
            </div>
            <div className="flex flex-row gap-5 mb-3">
              <div className=" w-[280px] lg:mt-6">
                <label className="block text-gray-700 text-xs font-bold mb-1">
                  Street/ house number
                </label>
                <input
                  type="address"
                  required={true}
                  value={streetHouse}
                  onChange={handleStreetHouse}
                  placeholder="Street/ house number"
                  className="border-b border-black  focus:outline-none focus:border-blue-500 w-[280px] py-1"
                />
              </div>
              <div className=" w-[280px] lg:mt-6">
                <label className="block text-gray-700 text-xs font-bold mb-1">
                  Postal
                </label>
                <input
                  type="address"
                  required={true}
                  value={postal}
                  onChange={handlePostal}
                  placeholder="Postal"
                  className="border-b border-black  focus:outline-none focus:border-blue-500 w-[280px] py-1"
                />
              </div>
            </div>
            <div className="flex flex-row gap-5 mb-3">
              <div className=" w-[280px] lg:mt-6">
                <label className="block text-gray-700 text-xs font-bold mb-1">
                  City
                </label>
                <input
                  type="text"
                  required={true}
                  value={city}
                  onChange={handleCity}
                  placeholder="City"
                  className="border-b border-black  focus:outline-none focus:border-blue-500 w-[280px] py-1"
                />
              </div>
              <div className=" w-[280px] lg:mt-6">
                <label className="block text-gray-700 text-xs font-bold mb-1">
                  Country
                </label>
                <input
                  type="text"
                  required={true}
                  value={country}
                  onChange={handleCountry}
                  placeholder="Country"
                  className="border-b border-black  focus:outline-none focus:border-blue-500 w-[280px] py-1"
                />
              </div>
            </div>
            <div className="text-sm text-black font-semibold mt-20">
              Additional Information
            </div>
            <div className=" w-[580px] lg:mt-6">
              <label className="block text-gray-700 text-xs font-bold mb-1">
                How many works do you want to register?
              </label>
              <input
                type="number"
                required={true}
                placeholder="Amount of works"
                value={works}
                onChange={handleWorks}
                className="border-b border-black  focus:outline-none focus:border-blue-500 w-[580px] py-1"
              />
            </div>
            <div className=" w-[580px] lg:mt-6">
              <label className="block text-gray-700 text-xs font-bold mb-1">
                How did you hear about us?
              </label>
              <input
                type="How did you hear about us?"
                required={true}
                value={hear}
                onChange={handleHear}
                placeholder="How did you hear about us?"
                className="border-b border-black  focus:outline-none focus:border-blue-500 w-[580px] py-1"
              />
            </div>
            <div className="text-sm text-black font-semibold mt-20">
              Upload attatchment
            </div>
            <div className="mt-5">
              <button className="flex flex-row items-center justify-center gap-2 px-10 text-xs py-3 border border-gray-500 rounded-3xl">
                <BsDownload />
                Submit
              </button>
            </div>
            <div className="mt-12">
              <div className="py-3 flex items-center">
                <input
                  type="checkbox"
                  className="appearance-none border rounded-full border-custom-mobile-orange checked:appearance-auto checked:bg-custom-mobile-orange  focus:outline-none w-5 h-5 mr-2"
                />
                <span className="text-gray-600 text-xs">
                  Yes, I agree that my data will be processed in accordance with
                  this data protection <br /> declaration for the purpose of
                  establishing contact.
                </span>
              </div>
              <div className="w-[580px] mt-8">
                <button
                  className="w-[580px] rounded-3xl h-[40px] text-sm border  border-gray-500"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="text-gray-600 text-xs mt-10">
            We are available for you 24/7. You can reach us at:
          </div>
          <ul className=" flex flex-col mt-6">
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
              <Image src={locationIcon} width={15} height={15} alt="location" />
              <h2 className="text-[12px] text-custom-brown font-semibold">
                Tölzer Straße 1, 82031 Grünwald, Germany
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BindingForm;
