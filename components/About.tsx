import React from "react";
import Image from "next/image";
import img1 from "@/public/images/Manage_Icon.svg";
import img2 from "@/public/images/Present_Icon.svg";
import img3 from "@/public/images/Sell_Icon.svg";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white-100 py-12">
      <div className="container mx-auto text-center">
        {/* Section 1 */}
        <div className="mb-12 px-6">
          <p className="text-base text-custom-mobile-orange font-medium py-4">
            About the book register by Kollektum GmbH
          </p>
          <h2 className="text-3xl font-bold pb-4 leading-10">
            The new way
            <br />
            of passing values
          </h2>
          <p className="text-gray-600">
            The Kollektum-book register is a space for everyone who values
            exceptional books. Here you can register your valuable collection
            digitally and present it to collectors of books as well as
            prospective buyers in a clearly structured way. Like this you are
            able to keep the overview at any time and can share your facsimiles
            and other works without any extra effort with like-minded people,
            prospective buyers and family members.
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex justify-center flex-col lg:flex-row">
          {/* Card 1 */}
          <div className="w-full lg:w-[20%] bg-white rounded-lg p-4 lg:flex lg:flex-col lg:items-center">
            <Image
              src={img1}
              width={100}
              height={100}
              alt="Card 1"
              className="object-contain rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Manage</h3>
            <p className="text-gray-600 mt-2">
              As a member you can compile, change and delete your works on your
              own in your personal members’ area - for a better overview and
              more enjoyment out of your collection.
            </p>
          </div>
          {/* Card 2 */}
          <div className="w-full lg:w-[20%] bg-white rounded-lg p-4 lg:flex lg:flex-col lg:items-center">
            <Image
              src={img2}
              width={100}
              height={100}
              alt="Card 1"
              className="object-contain rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Present</h3>
            <p className="text-gray-600 mt-2">
              Never before has it been so easy to present valuable books to
              like-minded people or prospective buyers - spatially independent,
              informative, goal-oriented.
            </p>
          </div>
          {/* Card 3 */}
          <div className="w-full lg:max-w-xs bg-white rounded-lg  p-4 lg:flex lg:flex-col lg:items-center">
            <Image
              src={img3}
              alt="Card 1"
              width={100}
              height={100}
              className="object-contain rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Sell</h3>
            <p className="text-gray-600 mt-2">
              Your attractively presented works also attract prospective buyers
              who are able to make an inquiry through us.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mt-12 ml-3 lg:ml-0 text-start lg:text-center">
          <p className="text-base text-custom-mobile-orange font-medium py-4">
            Rare works
          </p>
          <h2 className="text-3xl font-bold pb-4">Discover the special</h2>
          <p className="text-gray-600">
            Every book collection has its very own gems. Works that you as the
            owner are particularly proud of. Because you have been looking for
            them for a long time and because they are strictly limited and
            precious rarities. You will find such very special and rare works
            here with us. Let yourself be inspired by outstanding masterpieces!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
