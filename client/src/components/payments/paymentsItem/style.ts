import { colors } from "./../../../styles/theme";
import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  padding: 12px;
  gap: 8px;
  margin-bottom: 20px;
  border-bottom: ${({ theme }) => theme.colors.GRAY_900_OPACITY_55} 1px solid;
`;

export const Image = styled.img`
  width: 134px;
`;

export const Desc = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  gap: 28px;
`;

export const ItemName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.smtitle};
  color: ${({ theme }) => theme.colors.BLACK_TEXT};
`;

export const ItemQuantity = styled.span`
  font-size: ${({ theme }) => theme.fontSize.text};
  color: ${({ theme }) => theme.colors.BLACK_OPACITY_70};
`;
