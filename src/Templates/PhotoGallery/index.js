import React from 'react';
import {
  GalleryCol,
  GalleryRow,
  PhotoSetCol,
  PhotoSetRow,
  SetDescription,
  StyledThumbnail, YearOption, YearSelectorWrapper
} from "./Components/StyledComponents";

function PhotoGallery({ collection, pathToImages }) {
  const [galleryVisible, setGalleryVisible] = React.useState(false);
  const [visibleYear, setVisibleYear] = React.useState();

  const toggleVisible = (key) => {

    if (galleryVisible === key)
    {
      setGalleryVisible();
    } else {
      setGalleryVisible(key);
    }

  }

  const YearSelections = () => {
    return collection.map( (photoSet, key) => {
      return (
        <YearOption
          open={visibleYear && visibleYear.year === photoSet.year}
          key={key}
          onClick={() => setVisibleYear(photoSet)}
        >
          {photoSet.year}
        </YearOption>
      );
    });
  };

  return (
    <>
      <YearSelectorWrapper>
        {YearSelections()}
      </YearSelectorWrapper>
      {visibleYear && visibleYear.sets.map((set, key) => {
        return (
          <PhotoSetRow key={key}>
            <PhotoSetCol>
              <SetDescription onClick={() => toggleVisible(key)} open={galleryVisible===key}>
                {set.description}
              </SetDescription>

              {galleryVisible === key &&
                <GalleryRow>
                  {set.images.map((image, key) => (
                    <GalleryCol key={key}>
                      <StyledThumbnail
                        background={`${pathToImages}${image}`}
                        onClick={() => {window.open(`${pathToImages}${image}`, '_blank')}}
                      />
                    </GalleryCol>
                  ))}
                </GalleryRow>
              }

            </PhotoSetCol>
          </PhotoSetRow>
        );
      })}
    </>
  )
}

export default PhotoGallery;