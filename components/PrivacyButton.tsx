import { AiOutlineLock } from "react-icons/ai";

const PrivacyButton = () => {
  return (
    <button className="fixed top-[70%] z-20 left-0 border ml-2 border-custom-mobile-orange transform -translate-y-1/2 flex flex-row items-center gap-2 bg-white text-black py-2 px-4 rounded-3xl">
      <span className="text-red-400">
        <AiOutlineLock />
      </span>{" "}
      Privacy
    </button>
  );
};

export default PrivacyButton;
