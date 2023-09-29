import { BiEdit } from "react-icons/bi";
import Image from "next/image";
const book10 = require("@/public/images/IMG_4251_copy_bb12520a0a.png").default;

function UserCard() {
  return (
    <>
      {/*This is the main div*/}
      <div className="w-[390px] lg:w-[280px] h-[400px] mt-3 border shadow-2xl ">
        {/*This is the edit icon div*/}
        <div className="cursor-pointer flex flex-row justify-end bg-gray-100 text-red-400 w-full pt-2 pr-2">
          <BiEdit />
        </div>
        {/*This is the book image div*/}
        <div className="h-[200px] shadow-lg flex items-center justify-center bg-gray-100 ">
          <Image src={book10} alt="book image" height={150} width={150} />
        </div>
        {/*This is the 2nd section*/}
        <div className="flex flex-row justify-between mt-5">
          <div className="text-xs ml-3 bg-gray-200 rounded-2xl px-3 flex flex-row items-center justify-center">
            Facsimile
          </div>
          <div className="mr-3">
            <span className="text-xs text-gray-400">Volumes:</span>{" "}
            <span className="text-xs text-black font-semibold">1</span>
          </div>
        </div>
        {/*This is the Heading text div*/}
        <div className="my-6 mx-3 text-sm text-black font-bold ">
          Civitates Orbis Terrarum 1582
        </div>
        <div className="h[1px] w-[240px]  mt-4 mx-auto bg-black mb-3"></div>
        <div className="flex flex-row justify-between mt-10">
          <div>
            <span className="text-gray-400 text-xs ml-3">Astronomie:</span>{" "}
            <span className="text-xs text-black font-medium ml-1">2022</span>
          </div>
          <div className="">
            <span className="text-gray-400 text-xs">Condition:</span>{" "}
            <span className="text-xs text-black font-medium ml-1 mr-3">
              Very Good
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
