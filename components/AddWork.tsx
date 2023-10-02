"use client";
import DropDown from "@/components/DropDown";
import ConditionDropdown from "@/components/ConditionDropDown";
import { IoChevronBackOutline } from "react-icons/io5";
import { useState, ChangeEvent } from "react";
import StaticDropdown from "./StaticDropDown";
import NavBar from "@/components/Navbar";
import PhotoGalleryParent from "./PhotoGalleryParent";
import MainImageUpload from "./MainImageUpload";
import Link from "next/link";

interface Photo {
  id: string;
  url: string;
  name: string;
}

interface IState {
  selectedImage: string | null;
  imageName: string;
}

function AddWork() {
  const [sellingPrice, setSellingPrice] = useState<string>();
  const [purchasePrice, setPurchasePrice] = useState<string>();
  const [bookTitle, setBookTitle] = useState<string>();
  const [infos, setInfos] = useState<string>();
  const [remarks, setRemarks] = useState<string>();
  const [selectedImportWork, setSelectedImportWork] = useState<string>("");
  const [selectedConditionOption, setSelectedConditionOption] =
    useState<string>("");
  const [purchaseDate, setPurchaseDate] = useState<string>("");
  const [isOnRequest, setIsOnRequest] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const [showPurchaseYear, setShowPurchaseYear] = useState(false);
  const [showCondition, setShowCondition] = useState(false);
  const [selectedOptionTypes, setSelectedOptionTypes] = useState<string>("");
  const [selectedOptionGenere, setSelectedOptionGenere] = useState<string>("");
  const [selectedOptionStyle, setSelectedOptionStyle] = useState<string>("");
  const [selectedOptionYear, setSelectedOptionYear] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedVolumes, setSelectedVolumes] = useState<string>("");
  const [selectedTotalPages, setSelectedTotalPages] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedCentury, setSelectedCentury] = useState<string>("");
  const [selectedAuthor, setSelectedAuthor] = useState<string>(""); // State for Author
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [statePhoto, setStatePhoto] = useState<IState>({
    selectedImage: null,
    imageName: "",
  });

  // Function to handle changes in the checkbox state
  const handleCheckboxChange = () => {
    setIsOnRequest(!isOnRequest); // Toggle the boolean state when the checkbox is clicked
  };
  // Function to handle changes in the date input
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPurchaseDate(event.target.value);
  };

  const handleSellingPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setSellingPrice(e.target.value);
  };
  const handlePurchasePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchasePrice(e.target.value);
  };
  const handleBookTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setBookTitle(e.target.value);
  };
  const handleInfos = (e: ChangeEvent<HTMLInputElement>) => {
    setInfos(e.target.value);
  };
  const handleRemarks = (e: ChangeEvent<HTMLInputElement>) => {
    setRemarks(e.target.value);
  };

  const goBack = () => {
    window.history.back(); // Navigate back in the browser history
  };

  function handleSubmit() {
    const photoNames = photos.map((photo) => photo.name);
    const photoUrls = photos.map((photo) => photo.url);

    const emailBody = `
    Selling Price: ${sellingPrice}
    Purchase Price: ${purchasePrice}
    Book Title: ${bookTitle}
    Infos: ${infos}
    Remarks: ${remarks}
    Selected Import Work: ${selectedImportWork}
    Selected Condition Option: ${selectedConditionOption}
    Purchase Date: ${purchaseDate}
    Is On Request: ${isOnRequest}
    Show Book: ${showBook}
    Show Purchase Year: ${showPurchaseYear}
    Show Condition: ${showCondition}
    Selected Option Types: ${selectedOptionTypes}
    Selected Option Genere: ${selectedOptionGenere}
    Selected Option Style: ${selectedOptionStyle}
    Selected Option Year: ${selectedOptionYear}
    Selected Country: ${selectedCountry}
    Selected Volumes: ${selectedVolumes}
    Selected Total Pages: ${selectedTotalPages}
    Selected Language: ${selectedLanguage}
    Selected Century: ${selectedCentury}
    Selected Author: ${selectedAuthor}
    Photo Names: ${photoNames.join(", ")}
    Photo URLs: ${photoUrls.join(", ")}
    State Photo Selected Image: ${statePhoto.selectedImage}
    State Photo Image Name: ${statePhoto.imageName}
  `;

    // Encode the email body for the mailto link
    const encodedEmailBody = encodeURIComponent(emailBody);

    // Create the mailto link
    const mailtoLink = `mailto:your@email.com?subject=New Book Data&body=${encodedEmailBody}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  }

  function handleDiscard() {
    // Reset all state variables to their initial values
    setSellingPrice("");
    setPurchasePrice("");
    setBookTitle("");
    setInfos("");
    setRemarks("");
    setSelectedImportWork("");
    setSelectedConditionOption("");
    setPurchaseDate("");
    setIsOnRequest(false);
    setShowBook(false);
    setShowPurchaseYear(false);
    setShowCondition(false);
    setSelectedOptionTypes("");
    setSelectedOptionGenere("");
    setSelectedOptionStyle("");
    setSelectedOptionYear("");
    setSelectedCountry("");
    setSelectedVolumes("");
    setSelectedTotalPages("");
    setSelectedLanguage("");
    setSelectedCentury("");
    setSelectedAuthor("");
    setPhotos([]);
    setStatePhoto({
      selectedImage: null,
      imageName: "",
    });
  }

  return (
    <>
      <div className="px-5 w-full py-7 lg:px-14 lg:py-8 ">
        <div className="flex flex-row items-center text-xs text-red-400 ml-0 2xl:ml-[150px]">
          <div
            onClick={goBack}
            className="flex cursor-pointer justify-center items-center"
          >
            <IoChevronBackOutline />
            <span className="ml-1">Back</span>
          </div>
          <Link href="/my_library" className="ml-7 cursor-pointer">
            My Library
          </Link>
          <span className="mx-3">{">"}</span>
          <span>Add Object</span>
        </div>
        <div className="py-8 text-xl text-black font-bold ml-0 2xl:ml-[150px]">
          Add Object
        </div>
        <div className="lg:px-10 lg:py-12 flex w-full flex-col 2xl:pl-[150px] lg:flex-row ">
          <div className="lg:w:1/2 w-full flex justify-center ">
            <MainImageUpload state={statePhoto} setState={setStatePhoto} />
          </div>

          <div className="lg:w:1/2 w-full flex flex-col justify-center lg:mt-0 mt-10">
            <div className="text-xl text-black font-medium">Object Data</div>
            <div className="text-xs font-light mt-8 mb-5">
              If the work already exists in the database, you can simply import
              it by choosing "import work" tp <br className="hidden lg:block" />{" "}
              automatically transferr its data.
            </div>
            <div className="text-base mt-5 text-black font-medium">
              import work
            </div>
            <div className="w-full mt-3">
              <DropDown
                setSelectedImportWork={setSelectedImportWork}
                selectedImportWork={selectedImportWork}
              />
            </div>
            <div className="flex flex-row items-center w-full lg:w-[80%] gap-3">
              <div className="w-full">
                <div className="text-base mt-5 text-black font-medium">
                  Condition
                </div>
                <div className="w-full">
                  <ConditionDropdown
                    setSelectedConditionOption={setSelectedConditionOption}
                    selectedConditionOption={selectedConditionOption}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="text-base mt-5 text-black font-medium">
                  Date of purchase
                </div>
                <input
                  type="date"
                  placeholder="31/08/2023"
                  className="border border-gray-400 rounded-sm w-full px-2 py-2"
                  value={purchaseDate} // Bind the input value to the state
                  onChange={handleDateChange} // Handle changes in the input
                />
              </div>
            </div>
            {/*Selling Price*/}
            <div className="text-base mt-5 text-black font-medium">
              Selling Price
            </div>
            <div className="flex flex-row items-center gap-1 lg:gap-3 lg:w-[80%] mt-5">
              <div className="flex flex-row items-center gap-1">
                <input
                  type="checkbox"
                  className="appearance-none border rounded-sm border-custom-mobile-orange checked:appearance-auto checked:bg-custom-mobile-orange focus:outline-none w-5 h-5 mr-2"
                  checked={isOnRequest} // Bind the checked state to the boolean state
                  onChange={handleCheckboxChange} // Handle changes in the checkbox
                />
                <span className="text-sm font-medium w-max">On request</span>
              </div>
              <div className="w-[30%]">
                <input
                  type="number"
                  placeholder="Selling Price"
                  value={sellingPrice}
                  onChange={handleSellingPrice}
                  className="px-3 rounded-sm py-2 w-full border border-gray-400"
                />
              </div>
              <div className="w-[50%]">
                <input
                  type="number"
                  placeholder="Purchase price"
                  value={purchasePrice}
                  onChange={handlePurchasePrice}
                  className=" py-2 rounded-sm ml-1 w-full lg:ml-0 px-3 border border-gray-400"
                />
              </div>
            </div>
            {/*Selling Price*/}
            <div className="text-base mt-5 text-black font-medium mb-4">
              Display
            </div>
            <div className="mt-2 flex flex-wrap lg:flex-row items-center gap-8">
              <div className="flex flex-row items-center gap-1">
                <input
                  type="checkbox"
                  className="appearance-none border rounded-sm border-custom-mobile-orange checked:appearance-auto checked:bg-custom-mobile-orange focus:outline-none w-5 h-5 mr-2"
                  checked={showBook}
                  onChange={() => setShowBook(!showBook)}
                />
                <span className="text-sm font-medium">Show Book</span>
              </div>
              <div className="flex flex-row items-center ">
                <input
                  type="checkbox"
                  className="appearance-none border rounded-sm border-custom-mobile-orange checked:appearance-auto checked:bg-custom-mobile-orange focus:outline-none w-5 h-5 mr-2"
                  checked={showPurchaseYear}
                  onChange={() => setShowPurchaseYear(!showPurchaseYear)}
                />
                <span className="text-sm font-medium">Show purchase year</span>
              </div>
              <div className="flex flex-row items-center">
                <input
                  type="checkbox"
                  className="appearance-none border rounded-sm border-custom-mobile-orange checked:appearance-auto checked:bg-custom-mobile-orange focus:outline-none w-5 h-5 mr-2"
                  checked={showCondition}
                  onChange={() => setShowCondition(!showCondition)}
                />
                <span className="text-sm font-medium">Show condition</span>
              </div>
            </div>
            <div className="mt-10 lg:mt-20 mb-4 text-sm font-base">
              or create new work data
            </div>

            <div className="w-full lg:w-[580px] mt-6">
              <label className="block text-gray-700 text-xs font-light mb-1">
                Book title*
              </label>
              <input
                type="text"
                placeholder="Enter your book title here"
                value={bookTitle}
                onChange={handleBookTitle}
                className="border-b border-gray-400 focus:outline-none w-full  lg:w-[580px] hover:bg-gray-100 py-1 "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-8 justify-center">
          <div>
            <div className="text-base font-base">Types</div>
            <div className="mt-2 w-full">
              <StaticDropdown
                txt={"Types"}
                selectedOption={selectedOptionTypes}
                setSelectedOption={setSelectedOptionTypes}
              />
            </div>
          </div>

          <div>
            <div className="text-base font-base">Genere</div>
            <div className="mt-2">
              <StaticDropdown
                txt={"Genere"}
                selectedOption={selectedOptionGenere}
                setSelectedOption={setSelectedOptionGenere}
              />
            </div>
          </div>

          <div>
            <div className="text-base font-base">Style</div>
            <div className="mt-2">
              <StaticDropdown
                txt={"Style"}
                selectedOption={selectedOptionStyle}
                setSelectedOption={setSelectedOptionStyle}
              />
            </div>
          </div>

          <div>
            <div className="text-base font-base">Year</div>
            <div className="mt-2">
              <StaticDropdown
                txt={"Year"}
                selectedOption={selectedOptionYear}
                setSelectedOption={setSelectedOptionYear}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-10 justify-center">
          <div>
            <div className="text-base font-base">Country</div>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Country"
                className="w-full lg:w-[320px] 2xl:w-[333px] py-2 rounded-sm px-3 border border-gray-400"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="text-base font-base">Volumes</div>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Volumes"
                className="w-full lg:w-[320px] 2xl:w-[333px] py-2 rounded-sm px-3 border border-gray-400"
                value={selectedVolumes}
                onChange={(e) => setSelectedVolumes(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="text-base font-base">Total Amount of pages</div>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Total amount of pages"
                className="w-full lg:w-[320px] 2xl:w-[333px] py-2 rounded-sm px-3 border border-gray-400"
                value={selectedTotalPages}
                onChange={(e) => setSelectedTotalPages(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="text-base font-base">Languages</div>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Language"
                className="w-full lg:w-[320px] 2xl:w-[333px] py-2 rounded-sm px-3 border border-gray-400"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex-col flex ml-[0px] w-full 2xl:ml-[214px] lg:flex-row gap-4 mt-10 ">
            <div className="">
              <div className="text-base font-base">Century</div>
              <div className="mt-2">
                <StaticDropdown
                  txt={"Century"}
                  selectedOption={selectedCentury}
                  setSelectedOption={setSelectedCentury}
                />
              </div>
            </div>
            <div>
              <div className="text-base font-base">Author</div>
              <div className="mt-2 w-full">
                <input
                  type="text"
                  placeholder="Author"
                  className="w-full lg:w-[320px] 2xl:w-[333px] py-2 rounded-sm px-3 border border-gray-400"
                  value={selectedAuthor}
                  onChange={(e) => setSelectedAuthor(e.target.value)} // Add onChange handler
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-full flex flex-col lg:flex-row mt-[150px] lg:items-center justify-center gap-2">
          <div className="w-full lg:w-[658px] 2xl:w-[688px] mt-6">
            <label className="block text-gray-700 xs font-medium mb-1">
              Infos*
            </label>
            <input
              type="text"
              placeholder="Enter text here"
              value={infos}
              onChange={handleInfos}
              className="border-b border-gray-400 focus:outline-none w-full lg:w-[658px] 2xl:w-[688px] hover:bg-gray-100 py-1 "
            />
          </div>
          <div className="w-full lg:w-[658px] 2xl:w-[688px] mt-6">
            <label className="block text-gray-700 xs font-medium mb-1">
              Remarks*
            </label>
            <input
              type="text"
              placeholder="Enter text here"
              value={remarks}
              onChange={handleRemarks}
              className="border-b border-gray-400 focus:outline-none w-full lg:w-[658px] 2xl:w-[688px] hover:bg-gray-100 py-1 "
            />
          </div>
        </div>
        <div className="flex flex-col ml-[0px] 2xl:ml-[214px] space-y-10 w-full ">
          <div className="mt-5 lg:mt-[11rem] text-lg font-medium">
            Photo Gallery
          </div>
          <div className="w-full  flex flex-col">
            <PhotoGalleryParent
              photos={photos}
              setPhotos={setPhotos}
              handleSubmit={handleSubmit}
              handleDiscard={handleDiscard}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddWork;
