import styled from "styled-components";
import theme from "src/styles/theme";

export const CartHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.bigTitle};
  font-weight: 600;
  border-bottom: 3px solid ${({ theme }) => theme.colors.BLACK_OPACITY_70};
  padding: 20px;
`;

export const CartWrapper = styled.div`
  display: flex;
  padding-top: 40px;
  gap: 70px;
`;

export const ItemWrapper = styled.div`
  flex: 7;
`;
export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteCartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 40px;
  border: 1px solid ${theme.colors.GRAY_10};
`;

export const InfoContainer = styled.div`
  flex: 3;
`;
