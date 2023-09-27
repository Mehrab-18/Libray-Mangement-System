"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      question:
        "How do I become a member of the book register by Kollektum GmbH?",
      answer: "To become a member, follow these steps...",
    },
    {
      question: "What benefits do I have as a member?",
      answer: "As a member, you will enjoy the following benefits...",
    },
    {
      question: "Does the Kollektum GmbH purchase collections themselves?",
      answer: "Yes, Kollektum GmbH does purchase collections...",
    },
    {
      question:
        "As a member, can I view the libraries of others and vice versa?",
      answer: "Yes, members can view each other's libraries...",
    },
    {
      question:
        "How much does it cost to register with the Kollektum GmbH book register?",
      answer: "The registration cost is...",
    },
  ];

  const toggleQuestion = (index: any) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <div className="px-4 lg:px-0 lg:pr-[100px] 2xl:pr-0 2xl:mx-0 lg:pt-7 w-full 2xl:w-[55%]">
      <span className=" ml-1 lg:ml-0  text-custom-mobile-orange  text-[16px] font-normal">
        FAQ
      </span>
      <h1 className="mt-3 lg:mt-8  w-full leading-10 text-[26px] md:text-4xl font-medium tracking-wider	 ">
        Frequently <br/>asked questions
      </h1>
      <p className="w-full  tracking-wider	leading-5  font-light lg:w-3/3 my-5 lg:my-10 text-custom-gray text-[15px]">
        For all questions concerning the book register by Kollektum GmbH please
        do not hesitate to contact us directly. We’ve answered the most
        important frequently asked questions for you here:
      </p>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-t border-black-100  p-2 lg:p-2">
            <div className="flex justify-between items-center">
              <div className=" font-medium lg:font-medium text-[14px] lg:text-[16px] text-cutom-brown">
                {item.question}
              </div>
              <button
                className="text-custom-mobile-orange focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                {openQuestion === index ? <FiMinus /> : <FiPlus />}
              </button>
            </div>
            {openQuestion === index && (
              <div className="mt-2 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
