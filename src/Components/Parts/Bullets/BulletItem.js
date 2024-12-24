import React from 'react';
import styled from 'styled-components/macro';;

const BulletItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: .2rem;
  margin-right:.8rem;

  @media (max-width: 900px) {
    margin-right:1.2rem;
  }
`

const Bullet = styled.img`
  margin: .3rem
`;

const BulletText = styled.span`
  color: #D2D9E2;

  font-size: .9rem;


  @media (max-width: 900px) {
  //  font-size: .8rem;
  }
  //
  //@media (max-width: 600px) {
  //  font-size: .8rem;
  //}
`

function BulletItem({children}) {
  return (
    <BulletItemWrapper>
      <Bullet src="/pics/band-logo-tiny.png" />
      <BulletText>{children}</BulletText>
    </BulletItemWrapper>
  );
}

export default BulletItem;