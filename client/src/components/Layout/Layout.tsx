import React from "react";
import styled from "styled-components";
import Breakpoints from "src/styles/breakpoints";
import Gnb from "src/components/gnb/Gnb";
import media from "src/styles/media";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Gnb />
      <Container>{children}</Container>
    </>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 120px 20px;
  max-width: ${Breakpoints.xlarge}px;
  min-width: ${Breakpoints.small}px;

  ${media.xlarge} {
    width: ${Breakpoints.large}px;
  }

  ${media.large} {
    width: ${Breakpoints.small}px;
  }
`;

export default Layout;
