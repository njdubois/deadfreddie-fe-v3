import React, { useState } from 'react';
import styled from 'styled-components/macro';
import StyledRow from "../../Templates/StyledRow";
import StyledCol from "../../Templates/StyledCol";
import YouTubeLogo from "./Youtube_Logo.png";

const VideoWrapper = styled.div`
  padding: .5rem;
  cursor: pointer;
`

const VideoTitle = styled.div`
  padding: .5rem 0 .5rem;
  text-align: left;
  font-size: .8rem;
`

const BackWrapper = styled.div`
  text-align: center;
`;

const BackButton = styled.a`
  margin: 10px;
  cursor: pointer;
  
  text-decoration: none;

  color: ${({ theme, ...props }) => props.selected ? theme.colors.NeonBlue : theme.colors.ElectricRed};
  text-shadow: 1px 1px  ${({ theme, ...props }) => theme.colors.VividYellow};
  
  text-transform: capitalize;
  font-size: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.NeonBlue};
  }
`;

const Img = styled.img`
  width: 100%;
`

const YoutubeImage = styled.img`
  width: 150px;
  padding: 2rem;
`

function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(false);

  const videoData = [
    {
      "url": "https://www.youtube.com/@deadfreddie3792",
      "image": YouTubeLogo,
      "title": `Please Subscribe!`,
      "description":`Subscribe to Dead Freddies Youtube Channel Today!`
    },
    {
      "filename":"a0jh323397I",
      "title": "Marys Waiting",
      "description":"Dead Freddie - Marys Waiting - Official Video"
    },
    {
      "filename":"sVOokvDuXXQ",
      "title": "Suffragette City",
      "description":"Dead Freddie as David Bowie 20221028 Suffragette City"
    },
    {
      "filename":"A6YxeLsoiao",
      "title": "In Heat",
      "description": `Dead Freddie "In Heat" Lyric Video 2023`
    },
  ];

  const mapBandVideos = () => {
    return videoData.map( (video, key) => {
      return (
        <StyledCol
          key={key}
          onClick={() => {
            if (video.url) {
              window.open(video.url, "_blank");
            } else {
              setSelectedVideo(video)
            }
          }}
          sm={6} md={4} lg={3}
        >
          <VideoWrapper>
            <VideoTitle>
              {video.title}
            </VideoTitle>
            {video.image &&
              <Img src={video.image}  alt={video.title}/>
            }
            {!video.image &&
              <Img src={`http://img.youtube.com/vi/${video.filename}/0.jpg`}  alt={video.title}/>
            }
            <VideoTitle>
              {video.description}
            </VideoTitle>
          </VideoWrapper>
        </StyledCol>
      );
    });
  };

  return (
    <>
      {!selectedVideo &&
        <>
          <StyledRow>
            <StyledCol title='Dead Freddie on Youtube'>
              <StyledRow>
                {mapBandVideos()}
              </StyledRow>
            </StyledCol>
          </StyledRow>
        </>
      }

      {selectedVideo &&
        <StyledRow>
          <StyledCol title={selectedVideo.title}>
              <div
                className='video'
                style={{
                  position: "relative",
                  paddingBottom: "56.25%" /* 16:9 */,
                  paddingTop: 25,
                  height: 0
                }}>
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                  src={`https://www.youtube.com/embed/${selectedVideo.filename}`}
                  frameBorder="0"
                />
              </div>
            <div>
              {selectedVideo.description}
            </div>
              <BackWrapper>
                <BackButton onClick={() => setSelectedVideo(false)}>back</BackButton>
              </BackWrapper>
            </StyledCol>
        </StyledRow>
      }
    </>
  );

}

export default Videos;