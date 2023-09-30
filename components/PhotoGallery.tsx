// components/PhotoGallery.tsx
import React from "react";
import { useDropzone } from "react-dropzone";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ImageUpload from "../public/images/browseImage.svg";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

interface Photo {
  id: string;
  url: string;
  name: string; // Add image name to the Photo interface
}

interface PhotoGalleryProps {
  photos: Photo[];
  onDrop: (acceptedFiles: File[]) => void;
  onDragEnd: (result: any) => void;
  removePhoto: (id: string) => void;
  errorMessage: string | null;
  handleSubmit(): void;
  handleDiscard(): void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  onDrop,
  onDragEnd,
  removePhoto,
  errorMessage,
  handleSubmit,
  handleDiscard,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <div className="flex lg:flex-row flex-col space-x-0 lg:space-x-36">
        <div className="mb-4 h-[200px] w-full lg:w-[350px] p-4 rounded-xl">
          <div
            {...getRootProps()}
            className="flex flex-col justify-between items-center h-full cursor-pointer"
          >
            <input {...getInputProps()} />

            <Image src={ImageUpload} />
          </div>
        </div>

        <div className="flex flex-col space-y-10 mb-10">
          <div className="text-sm">Order of appearance (drag change)</div>

          <div>
            {photos.length > 0 && (
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="photo-gallery" direction="vertical">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className=""
                    >
                      {photos.map((photo, index) => (
                        <Draggable
                          key={photo.id}
                          draggableId={photo.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="mb-4"
                            >
                              <div className="bg-white px-5 py-3 flex items-center w-[330px] lg:w-[375px] border hover:border-custom-mobile-orange justify-between shadow-xl">
                                <img
                                  src={photo.url}
                                  alt={`Photo ${index}`}
                                  className="w-[79px] h-[55px] object-fill"
                                />
                                <p className="text-gray-700 text-sm max-w-[100px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                  {photo.name}
                                </p>{" "}
                                <button
                                  onClick={() => removePhoto(photo.id)}
                                  className=" text-black w-fit h-fit px-2 rounded-full"
                                >
                                  <RxCross1 />
                                </button>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            )}
          </div>
          <div className="flex flex-col lg:flex-row mt-[50px] space-y-5 lg:space-y-0 space-x-0 lg:space-x-5">
            <button
              className="text-white rounded-full flex flex-row items-center justify-center gap-2 bg-custom-mobile-orange py-3 px-8"
              onClick={handleSubmit}
            >
              <span>Save and Request</span>
            </button>
            <button
              className="text-custom-mobile-orange rounded-full flex flex-row items-center justify-center gap-2 border border-custom-mobile-orange py-3 px-8"
              onClick={handleDiscard}
            >
              <span>Discard</span>
              <span className="">
                <RxCross1 />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
