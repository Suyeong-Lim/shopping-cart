import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import logo from "public/success.gif";

const OrderCompletePage = () => {
  return (
    <>
      <Head>
        <title> 결제완료 </title>
      </Head>
      <Container>
        <Image src={logo} width="500px" height="500px" />
        <div>결제가 완료되었습니다.🎊</div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  font-size: 3rem;
  font-weight: 500;
`;
export default OrderCompletePage;
