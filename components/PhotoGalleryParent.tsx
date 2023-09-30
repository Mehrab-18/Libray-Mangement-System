// ParentComponent.tsx
import React, { useState } from "react";
import PhotoGallery from "./PhotoGallery";

interface Photo {
  id: string;
  url: string;
  name: string;
}

interface Props {
  photos: Photo[];
  setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>;
  handleSubmit(): void;
  handleDiscard(): void;
}

const PhotoGalleryParent: React.FC<Props> = ({
  photos,
  setPhotos,
  handleSubmit,
  handleDiscard,
}: Props) => {
  // const [photos, setPhotos] = useState<Photo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const checkDuplicateName = (fileName: string) => {
    return photos.some((photo) => photo.name === fileName);
  };

  const getTotalFileSize = (files: File[]) => {
    return files.reduce((totalSize, file) => totalSize + file.size, 0);
  };

  const onDrop = (acceptedFiles: File[]) => {
    const totalSizeLimit = 20000000; // 25MB limit
    const totalSize = getTotalFileSize([
      ...photos.map((photo) => new File([], photo.name)), // Extract File objects from photos
      ...acceptedFiles,
    ]);
    console.log(totalSize > totalSizeLimit, totalSize, totalSizeLimit);
    if (totalSize > totalSizeLimit) {
      setErrorMessage("Total file size exceeds the limit of 25MB.");
      console.log("Total file size exceeds the limit of 25MB.");
      return;
    }

    const newPhotos = acceptedFiles.map((file) => {
      const fileName = file.name;
      if (checkDuplicateName(fileName)) {
        setErrorMessage(`Image with the name "${fileName}" already exists.`);
        console.log(`Image with the name "${fileName}" already exists.`);
        return null;
      }
      return {
        id: fileName,
        url: URL.createObjectURL(file),
        name: fileName,
      };
    });

    // Filter out null values (duplicate names)
    const validNewPhotos = newPhotos.filter((photo) => photo !== null);

    setPhotos(
      (prevPhotos: Photo[]) => [...prevPhotos, ...validNewPhotos] as Photo[]
    );
    setErrorMessage(null);
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedPhotos = Array.from(photos);
    const [reorderedItem] = reorderedPhotos.splice(result.source.index, 1);
    reorderedPhotos.splice(result.destination.index, 0, reorderedItem);

    setPhotos(reorderedPhotos);
  };

  const removePhoto = (id: string) => {
    setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== id));
  };

  return (
    <div>
      <div className="flex w-full justify-between mb-4">
        <div className="w-full">
          <PhotoGallery
            photos={photos}
            onDrop={onDrop}
            onDragEnd={onDragEnd}
            removePhoto={removePhoto}
            errorMessage={errorMessage}
            handleSubmit={handleSubmit}
            handleDiscard={handleDiscard}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryParent;
