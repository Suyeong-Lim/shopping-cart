import styled from "styled-components";
import theme from "src/styles/theme";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.bigTitle};
  border-bottom: 3px solid ${({ theme }) => theme.colors.BLACK_OPACITY_70};
  padding: 20px;
`;

export const PaymentsWrapper = styled.div`
  display: flex;
  padding-top: 40px;
  gap: 70px;
`;

export const PaymentsItemContainer = styled.div`
  flex: 7;
`;

export const InfoContainer = styled.div`
  flex: 3;
`;

export const PaymentHeader = styled.div`
  padding: 20px 0;
  margin-left: 12px;
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.colors.BLACK};
  font-weight: 500;
`;

export const Image = styled.img`
  width: 134px;
`;

export const Container = styled.ul`
  display: flex;
`;

export const Desc = styled.li`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  span {
    margin-top: 12px;
  }
`;
