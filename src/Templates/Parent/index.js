import React from 'react';
import styled from "styled-components/macro";

const OuterSpacer = styled.div`
  text-align: center;
  background-color: ${props => props.background};
`;

const InnerSpacer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
`;

function Parent({ background, children }) {
  return (
    <OuterSpacer background={background}>
      <InnerSpacer>
        {children}
      </InnerSpacer>
    </OuterSpacer>
  );
}

export default Parent;