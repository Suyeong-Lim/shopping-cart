import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { URL } from "src/utils/url";
import { BsCart4 } from "react-icons/bs";
import Breakpoints from "src/styles/breakpoints";
const Gnb = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Container>
        <LogoContainer>
          <BsCart4 size={40} />
          <Logo onClick={() => router.push(URL.HOME())}>WOOWA SHOP</Logo>
        </LogoContainer>
        <MenuContainer>
          <Menu onClick={() => router.push(URL.CART())}>장바구니</Menu>
          <Menu onClick={() => router.push(URL.ORDER())}>주문목록</Menu>
        </MenuContainer>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.GNB};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${Breakpoints.xlarge}px;
  min-width: ${Breakpoints.small}px;
  margin: 0 auto;
  height: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.WHITE};
  margin-left: 36px;
`;

const Logo = styled.button`
  font-weight: 700;
  margin-left: 20px;
  padding: 2px;
  cursor: pointer;
  font-size: 2.3rem;
  color: ${({ theme }) => theme.colors.WHITE};
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
