import Image from "next/image";
import React from "react";
import styled from "styled-components";
import empty from "public/empty.gif";
import theme from "src/styles/theme";

type Props = {
  type: "empty" | "error";
  label: string;
};

const ErrorBanner = ({ label, type }: Props) => {
  if (type === "empty") {
    return (
      <Container>
        <div>
          <Image src={empty} width="200px" height="200px" />
        </div>
        <Text>{label}</Text>
      </Container>
    );
  }

  if (type === "error") {
    return <div>error</div>;
  }

  return null;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 112px;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSize.bigTitle};
  font-weight: 600;
  margin-top: 44px;
`;

export default ErrorBanner;
