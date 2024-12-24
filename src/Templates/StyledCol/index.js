import React from 'react';
import {ColHeader} from "./Components/ColHeader";
import {Col} from "react-bootstrap";
import styled from "styled-components/macro";

const PageCol = styled(Col)`
  //padding: .5rem;
  //border: 1px solid red;
  
`

function StyledCol({ title, children, ...props }) {
  return (
    <PageCol {...props}>
      {title &&
        <ColHeader>
          {title}
        </ColHeader>
      }

      <>
        {children}
      </>
    </PageCol>
  );
}

export default StyledCol;