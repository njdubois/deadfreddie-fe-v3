import React from 'react';
import {Row} from "react-bootstrap";
import styled from "styled-components/macro";

const FinalRow = styled(Row)`
  margin: 0;
  padding: .5rem;
`

function StyledRow({ children }) {
  return (
    <FinalRow>
      {children}
    </FinalRow>
  );
}

export default StyledRow;