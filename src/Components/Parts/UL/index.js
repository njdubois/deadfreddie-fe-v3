import styled from 'styled-components/macro';

export const UL = styled.ul`

  color: #5C7CA1;
  margin: 0;
  
  li {
    font-size: 1.5rem;
    
    span {
      color: #D2D9E2;
    }
    
    @media (max-width: 900px) {
      font-size: 1.2rem;
    }

    @media (max-width: 600px) {
      font-size: 1rem;
      //margin: 1rem 0 1rem 0;
  }
`;