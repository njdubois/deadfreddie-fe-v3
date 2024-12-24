import styled from "styled-components/macro";

export const PageHeader = styled.p`
  width: 100%;
  padding: 1rem 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.ElectricRed};
  font-size: 1.7rem;

  @media (min-width: 1000px) {
    display: none;
  }
`;