import React, {useContext} from 'react';
import {
  GalleryCol,
  GalleryRow, ImageViewerWrapper, PhotoMenu, PhotoMenuItem,
  PhotoMenuOption,
  PhotoMenuSelectorWrapper,
  PhotoSetCol,
  PhotoSetDescription,
  PhotoSetLabel,
  PhotoSetRow,
  StyledThumbnail, StyledThumbnailWrapper, ViewedImage
} from "./Components/StyledComponents";
import {PhotoObjectsContext} from "./Context/PhotoObjectsContext";

function PhotoObjects({ALL_PHOTO_CATEGORIES}) {
  const {
    setSelectedPhotoShoot,
    selectedPhotoShoot,
    currentPhotoSet,
    setCurrentPhotoSet,
    setCurrentImage,
    currentImage,
    currentPhotoObject,
    setCurrentPhotoObject,
  } = useContext(PhotoObjectsContext);

  return (
    <>
      {currentImage && <>
        <ImageViewerWrapper>
          <ViewedImage
            src={`${process.env.PUBLIC_URL}/Pictures/${currentPhotoObject.id}/images/${currentImage}`}
            onClick={ () => {window.open(`${process.env.PUBLIC_URL}/Pictures/${currentPhotoObject.id}/images/${currentImage}`, '_blank')}}
          />
        </ImageViewerWrapper>

        <PhotoMenuSelectorWrapper>
        {currentPhotoSet?.images.indexOf(currentImage) > 0 && <>
          <PhotoMenuOption onClick={() => setCurrentImage(currentPhotoSet?.images[currentPhotoSet?.images.indexOf(currentImage) - 1])}>
            Last
          </PhotoMenuOption>
        </>}

        <PhotoMenuOption onClick={() => setCurrentImage(undefined)}>
          Exit
        </PhotoMenuOption>

        {currentPhotoSet?.images.indexOf(currentImage) < currentPhotoSet?.images.length - 1 && <>
          <PhotoMenuOption onClick={() => setCurrentImage(currentPhotoSet?.images[currentPhotoSet?.images.indexOf(currentImage) + 1])}>
            Next
          </PhotoMenuOption>
        </>}

        {currentPhotoSet?.images.indexOf(currentImage) === currentPhotoSet?.images.length - 1 && <>
          <PhotoMenuOption onClick={() => setCurrentImage(currentPhotoSet?.images[0])}>
            Start Over
          </PhotoMenuOption>
        </>}

        </PhotoMenuSelectorWrapper>
      </>}


      {!currentImage && <>
        <PhotoMenu>
          {ALL_PHOTO_CATEGORIES.map((photoObject, key) => {
            return (
              <PhotoMenuItem
                key={key}
                selected={photoObject.id === currentPhotoObject?.id}
                onClick={() => setCurrentPhotoObject(photoObject)}
              >
                {photoObject.photoObjectLabel}
              </PhotoMenuItem>
            );
          })}
        </PhotoMenu>

        <PhotoMenuSelectorWrapper>
          {currentPhotoObject?.photoShoots.map( (photoShoot, key) => {
            return (
              <PhotoMenuOption
                key={key}
                onClick={() => setSelectedPhotoShoot(photoShoot)}
                selected={photoShoot.id === selectedPhotoShoot?.id}
              >
                {photoShoot.label}
              </PhotoMenuOption>
            );
          })}
        </PhotoMenuSelectorWrapper>

        {selectedPhotoShoot && selectedPhotoShoot?.photoSets.map((photoSet, key) => {
          return (
            <PhotoSetRow key={key}>
              <PhotoSetCol>
                {photoSet.label &&
                  <PhotoSetLabel onClick={() => setCurrentPhotoSet(photoSet)}>
                    {photoSet.label}
                  </PhotoSetLabel>
                }
                {photoSet.description &&
                  <PhotoSetDescription onClick={() => setCurrentPhotoSet(photoSet)}>
                    {photoSet.description}
                  </PhotoSetDescription>
                }

                {currentPhotoSet?.id === photoSet.id && photoSet.images &&
                  <GalleryRow>
                    {photoSet.images.map( (image, key) => {
                      return (
                        <GalleryCol key={key}>
                          <StyledThumbnailWrapper>
                            <StyledThumbnail
                              onClick={ () => setCurrentImage(image)}
                              background={`${process.env.PUBLIC_URL}/Pictures/${currentPhotoObject.id}/images/${image}`}
                            />
                          </StyledThumbnailWrapper>
                        </GalleryCol>
                      );
                    })}
                  </GalleryRow>
                }
              </PhotoSetCol>
            </PhotoSetRow>
          );
        })}
      </>}

    </>
  );
}

export default PhotoObjects;