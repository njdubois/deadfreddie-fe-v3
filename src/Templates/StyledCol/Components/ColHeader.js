import styled from "styled-components/macro";

export const ColHeader = styled.p`
  width: 100%;
  padding: .5rem 0;
  margin: 0 0 .5rem;
  color: ${({ theme }) => theme.colors.LimeGreen};
  text-align: center;
  font-size: 1rem;
  border-bottom: 1px solid white;
`;