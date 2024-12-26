import React, { useContext } from 'react';
import BandMember from "./BandMember";
import styled from 'styled-components/macro';
import {AuthContext} from "../../Context/AuthContext";
import AdminModal from "./admin/AdminModal";
import StyledRow from "../../Templates/StyledRow";
import StyledCol from "../../Templates/StyledCol";
import {P} from "../../Templates/P";
import UsChecker from "./usChecker.jpg";
import UsPink from "./usPink.jpg";
import UsSuites from "./usSuites.jpg";

const BandLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const BandBioImage = styled.img`
  width: 200px;
`;

const BioWrapper = styled.div`
  text-align: left;
`;

function Bio() {
  return (
    <>
      <StyledRow>
        <StyledCol
          title='Dead Freddie is the Chicago Punk Pop Phenomena'
          lg={8}
          sm={12}
        >
          <BioWrapper>
            <P>
              The current members of the band are Gintas Buinevicius on Drums, Guitar and Backing Vocals, Nick DuBois on
              Guitar, Karl Sperling on Bass Guitar and Donatas Ramanauskas on Lead Vocals and Accordion. The core of
              the current line-up has been together since 2013.
            </P>
            <P>
              Dead Freddie's original music is a blend of garage, glam, punk, post-punk, power pop, ska and straight up
              rock.
            </P>
            <P>
              The original group, called Dead Freddie Band, formed in 1979 on the southwest side of Chicago.  The group
              played mainly original material, but was certainly influenced by the then new Punk movement, namely, the
              Sex Pistols, The Clash and The Ramones as well as by proto-punk artists such as Iggy Pop, Lou Reed, glam
              rock performers like the New York Dolls, David Bowie and Mott The Hoople plus some classic rock by The
              Who, The Rolling Stones, Led Zeppelin, The Beatles and Bruce Springsteen.  Finally, the excellent Power
              Pop groups of Chicago and the Midwest, such as Cheap Trick, Off Broadway USA, Skafish and Pezband, were
              also strong influences of the early Dead Freddie sound.  The original group disbanded in 1982, but the
              DNA of the original sound continues.
            </P>
          </BioWrapper>
        </StyledCol>
        <StyledCol>
          <BandLogoWrapper>
            <BandBioImage src={UsChecker} alt="band logo" />
          </BandLogoWrapper>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol
          title=''
          lg={8}
          sm={12}
        >
          <BioWrapper>
            <P>
              Donatas Ramanauskas remains from the original 1979 line up. Dead Freddie is the only band he has ever been
              in.  Gintas Buinevicius, who joined Dead Freddie in 2013, has previously played in various bands since
              the 1980's including Steak, Up, The Sloping of Water, The Ralleys and The Repeats.  He writes and
              performs solo material as Friends of the Moth and Saddleman, as well as the premier Beatles Polka Group,
              Sgt. Sauerkraut.  Karl Sperling, a multi-instrumentalist, who is also a regular member of Sgt.
              Sauerkraut's Polka Band, came on board in January 2020.  Nick DuBois, who first joined Dead Freddie in
              the summer of 2015 as bass guitarist, left the band in 2016, but returned to the band in early 2023 and
              passed the audition to become the guitarist in the band.
            </P>
            <P>
              The first release by the group in November 2016 was a 6-track EP titled "If I Knew What I Wanted".  It
              contains classic tracks from the original 1979 material, plus three new original tracks by the current
              group.  It was recorded in Chicago at Bricktop Studio by sound engineer/producer Pete Grossmann and
              mastered by Trevor Sadler of Mastermind Productions.
            </P>
          </BioWrapper>
        </StyledCol>
        <StyledCol>
          <BandLogoWrapper>
            <BandBioImage src={UsSuites} alt="band logo" />
          </BandLogoWrapper>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol
          title=''
          lg={8}
          sm={12}
        >
          <BioWrapper>
            <P>
              The band's first full-length LP, self-titled "Dead Freddie", was released in November 2018.  It was
              recorded at Sonic Palace in Oak Park, IL by sound engineer/producer Matt Mercado and mastered by
              Trevor Sadler of Mastermind Productions, and pressed at the prestigious, THIRD MAN PRESSING, owned by
              Jack White (White Stripes) in Detroit Michigan!
            </P>
            <P>
              Dead Freddie's third release, titled "The Devil Is In The Details" was released in December 2023. It was
              recorded at Sonic Palace in Chicago, IL by sound engineer/producer Matt Mercado and mastered by Trevor
              Sadler of Mastermind Productions, and pressed at Waxxy Poodle, near Madison, Wisconsin.  Its 8 tracks
              span various genres from punk to ballad to Lithuanian Cabaret!
            </P>
          </BioWrapper>
        </StyledCol>
        <StyledCol>
          <BandLogoWrapper>
            <BandBioImage src={UsPink} alt="band logo" />
          </BandLogoWrapper>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol
        >
          <BioWrapper>
            <P>
              Stay tuned for more Dead Freddie!
            </P>
          </BioWrapper>
        </StyledCol>
      </StyledRow>
    </>
  );
}

export default Bio;