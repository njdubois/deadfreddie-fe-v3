import React, { createContext, useState } from 'react';

export const PhotoObjectsContext = createContext();

export const PhotoObjectsProvider = ({ children }) => {
  const [currentPhotoObject, setCurrentPhotoObject] = useState();
  const [selectedPhotoShoot, setSelectedPhotoShoot] = useState();
  const [currentPhotoSet, setCurrentPhotoSet] = useState();
  const [currentImage, setCurrentImage] = useState();

  const setCurrentPhotoObjectTop = (object) => {
    setCurrentPhotoObject(object);
    setSelectedPhotoShootTop(undefined);
  }

  const setSelectedPhotoShootTop = (photoShoot) => {
    setSelectedPhotoShoot(photoShoot);
    setCurrentPhotoSetTop(undefined);
  }

  const setCurrentPhotoSetTop = (photoSet) => {
    if (currentPhotoSet === photoSet) {
      setCurrentPhotoSet(undefined);
    } else {
      setCurrentPhotoSet(photoSet);
    }

    setCurrentImageTop(undefined);
  }

  const setCurrentImageTop = (image) => {
    setCurrentImage(image);
  }

  return (
    <PhotoObjectsContext.Provider value={{
      currentPhotoObject,
      setCurrentPhotoObject: setCurrentPhotoObjectTop,
      selectedPhotoShoot,
      setSelectedPhotoShoot: setSelectedPhotoShootTop,
      currentPhotoSet,
      setCurrentPhotoSet: setCurrentPhotoSetTop,
      currentImage,
      setCurrentImage: setCurrentImageTop,
    }}>
      {children}
    </PhotoObjectsContext.Provider>
  );
};
