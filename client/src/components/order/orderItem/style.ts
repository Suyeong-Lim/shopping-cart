import { colors } from "./../../../styles/theme";
import styled from "styled-components";
import theme from "src/styles/theme";

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.GRAY_10};
  margin-bottom: 40px;
`;

export const BoxHeader = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.GRAY_HEAD};
  padding: 20px;
`;

export const Image = styled.img`
  width: 134px;
`;

export const Desc = styled.div`
  margin-left: 40px;
  margin-top: 4px;
  p:nth-child(1) {
    color: ${({ theme }) => theme.colors.BLACK_TEXT};
    font-size: ${({ theme }) => theme.fontSize.title};
  }
  p:nth-child(2) {
    margin-top: 12px;
    color: ${({ theme }) => theme.colors.BLACK_TEXT};
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  padding: 20px;
`;
