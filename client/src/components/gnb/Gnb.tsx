import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { URL } from "src/utils/url";

const Gnb = () => {
  const router = useRouter();

  return (
    <Container>
      <LogoContainer>
        <Logo onClick={() => router.push(URL.HOME())}>할로할로 마켓</Logo>
      </LogoContainer>
      <MenuContainer>
        <Menu onClick={() => router.push(URL.CART())}>장바구니</Menu>
        <Menu onClick={() => router.push(URL.ORDER())}>주문목록</Menu>
      </MenuContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.GNB};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LogoContainer = styled.div``;

const Logo = styled.button`
  cursor: pointer;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Menu = styled.button`
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: ${({ theme }) => theme.fontSize.title};
  cursor: pointer;
`;
export default Gnb;
