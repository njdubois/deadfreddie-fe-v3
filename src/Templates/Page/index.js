import React from 'react';
import styled from "styled-components/macro";
import {PageHeader} from "./Components/PageHeader";
import SocialNetworkIcons from "../SocialNetworkIcons";

const PageContent = styled.div`
  //padding-top:1rem;
`;

function Page({ title, children }) {
  return (
    <>
      {title &&
        <PageHeader>
          {title}
        </PageHeader>
      }
      <PageContent>
        { children }
      </PageContent>
    </>
  );
}

export default Page;