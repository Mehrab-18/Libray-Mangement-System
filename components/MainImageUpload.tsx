import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageUpload from "../public/images/browseImage.svg";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

interface IState {
  selectedImage: string | null;
  imageName: string;
}

interface Props {
  setState: React.Dispatch<React.SetStateAction<IState>>;
  state: IState;
}

const MainImageUpload = ({ setState, state }: Props) => {
  // const [state, setState] = useState<IState>({
  //   selectedImage: null,
  //   imageName: "",
  // });

  const onDrop = (acceptedFiles: File[]) => {
    const image = acceptedFiles[0];
    setState({
      ...state,
      selectedImage: URL.createObjectURL(image),
      imageName: image.name,
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "text/html": [".html", ".htm"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/gif": [".gif"],
      "image/svg+xml": [".svg"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
      "application/vnd.ms-excel": [".xls", ".xlsx"],
      "text/plain": [".txt"],
      // Add more file types and extensions as needed
    },
  });

  const handleEditClick = () => {
    setState({ ...state, imageName: "" }); // Clear the image name when editing
  };

  const handleDeleteClick = () => {
    setState({ selectedImage: null, imageName: "" }); // Clear the image and name when deleting
  };

  // const handleSendEmail = () => {
  //   const { selectedImage, imageName } = state;
  //   console.log("here -> ", state);
  //   if (selectedImage) {
  //     // Encode the image as a Base64 data URL
  //     const imageBase64 = selectedImage.replace("data:image/jpeg;base64,", "");

  //     // Prepare the email body
  //     const emailBody = `Image: ${imageName}\n\n![Image](${selectedImage})`;

  //     // Create the mailto link with the email body
  //     const mailtoLink = `mailto:?subject=Image&body=${encodeURIComponent(
  //       emailBody
  //     )}`;

  //     // Open the user's default email client
  //     window.location.href = mailtoLink;
  //   }
  // };

  return (
    <div className="flex flex-col justify-center items-center h-full cursor-pointer">
      {state.selectedImage ? (
        <div className="relative rounded-lg overflow-hidden shadow-xl h-[90%] p-4">
          <div className="flex justify-end text-black">
            <RxCross1 />
          </div>
          <div className="h-full pt-10">
            <div className="max-h-[70%] overflow-scroll bg-slate-600">
              <img
                src={state.selectedImage}
                alt="Uploaded"
                className="object-fill"
                width={400}
              />
            </div>
            <div className="flex flex-col mt-[35px] space-y-3">
              {state.imageName && (
                <p className="mt-2 text-center text-gray-500">
                  {state.imageName}
                </p>
              )}
              <div className=" bg-opacity-50 mt-2 flex space-x-5 justify-center items-center">
                <div {...getRootProps()} className="">
                  <input {...getInputProps()} />
                  <button
                    onClick={handleEditClick}
                    className="text-red-400 hover:text-red-800"
                  >
                    Edit
                  </button>
                </div>
                <button
                  onClick={handleDeleteClick}
                  className="text-red-400 hover:text-red-800"
                >
                  Delete
                </button>
                {/* <button
                  onClick={handleSendEmail}
                  className="text-blue-400 hover:text-blue-800"
                >
                  Send Email
                </button> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="flex flex-col justify-center items-center h-fit"
        >
          <input {...getInputProps()} />
          <Image src={ImageUpload} />
        </div>
      )}
    </div>
  );
};

export default MainImageUpload;
