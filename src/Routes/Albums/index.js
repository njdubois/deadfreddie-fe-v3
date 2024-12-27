import React from 'react';
import styled from 'styled-components/macro';
import StyledRow from "../../Templates/StyledRow";
import StyledCol from "../../Templates/StyledCol";
import Cover_Art_DeadFreddie from "./AlbumArt/Dead_Freddie.jpeg";
import Cover_Art_If_I_Knew_What_I_Wanted from "./AlbumArt/If_I_Knew_What_I_Wanted.jpeg";
import Cover_Art_The_Devils_In_The_Details from "./AlbumArt/The_Devil_Is_In_The_Details.jpeg";
import Streamer_Spotify_Icon from "./spotify.png";
import Streamer_Youtube_Music_Icon from "./youtube_music.png";
import Streamer_Apple_Music_Icon from "./apple_music.png";


const AlbumItem = styled.div`
  display: inline-block;
  margin: .5rem;
  padding: .5rem;
  border: 1px solid rgba(256,256,256,.1);
  background-color: rgba(256,256,256,.01);
`

const AlbumTitle = styled.div`
  //border: 1px solid pink;
  margin-bottom: .5rem;
  font-size: 1.1rem;
`

const AlbumArt = styled.img`
  width:150px;
`
const StreamerOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width:250px;
  //border: 1px solid red;
`

const StreamerIcon = styled.img`
  width: 25px;
  margin: .9rem;
  //border: 1px solid blue;
`
const StreamerLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme, ...props }) => props.selected ? theme.colors.NeonBlue : theme.colors.ElectricRed};
  text-shadow: 1px 1px  ${({ theme, ...props }) => theme.colors.VividYellow};

  &:hover {
    color: ${({ theme }) => theme.colors.NeonBlue};
  }
`

function Albums() {

  const CurrentAlbums = [
    {
      title: 'The Devil In The Details',
      spotifyUrl: 'https://open.spotify.com/album/3iXYFYDwR3GZDABOOXN8KR?si=oWFwVOuhT3Gp0BgqTAH1Lw',
      appleMusicUrl: 'https://music.apple.com/us/album/the-devil-is-in-the-details/1720995598',
      youtubeMusic: 'https://music.youtube.com/playlist?list=OLAK5uy_lJ4Lf119tAKxHSPfVrkmQhmy3TqKmJ1uQ',
      image: Cover_Art_The_Devils_In_The_Details,
    },
    {
      title: 'Dead Freddie',
      spotifyUrl: 'https://open.spotify.com/album/1Wb5B8HMpXK4RdwRxH8WJm?si=NuuFlT2tRBmflKb9bVei7A',
      appleMusicUrl: 'https://music.apple.com/us/album/dead-freddie/1448584366',
      youtubeMusic: 'https://music.youtube.com/playlist?list=OLAK5uy_mVSugO-_t-YcZyf6hx0sg0zDjLIJfp57s',
      image: Cover_Art_DeadFreddie,
    },
    {
      title: 'If I Knew What I Wanted',
      spotifyUrl: 'https://open.spotify.com/album/5Kvk2A90ZdNOY5A1lSFh1L?si=TrLnkJqoS42KhQtPCsakpA',
      appleMusicUrl: 'https://music.apple.com/us/album/if-i-knew-what-i-wanted-ep/1277940173',
      youtubeMusic: 'https://music.youtube.com/playlist?list=OLAK5uy_lhLq5pvoFo5m3b8Vn5Kh7x7O6w3hv_150',
      image: Cover_Art_If_I_Knew_What_I_Wanted,
    },
  ];


  return (
    <>
      <StyledRow>
        <StyledCol
          lg={12}
        >
          <StyledRow>
            {CurrentAlbums.map((album, key) => (
              <StyledCol key={key}>
                <AlbumItem>
                  <AlbumTitle>{album.title}</AlbumTitle>
                  <div><AlbumArt src={album.image} /></div>
                  <StreamerOptionsWrapper>
                    <StreamerLink href={album.spotifyUrl} target="_blank" rel="noopener noreferrer">
                      <StreamerIcon src={Streamer_Spotify_Icon} /> Spotify
                    </StreamerLink>
                    <StreamerLink href={album.youtubeMusic} target="_blank" rel="noopener noreferrer">
                      <StreamerIcon src={Streamer_Youtube_Music_Icon}/> Youtube
                    </StreamerLink>
                    <StreamerLink href={album.appleMusicUrl} target="_blank" rel="noopener noreferrer">
                      <StreamerIcon src={Streamer_Apple_Music_Icon}/> Apple
                    </StreamerLink>
                  </StreamerOptionsWrapper>
                </AlbumItem>
              </StyledCol>
              ))}
          </StyledRow>

        </StyledCol>
        <StyledCol>

        </StyledCol>
      </StyledRow>
    </>
  );
}

export default Albums;