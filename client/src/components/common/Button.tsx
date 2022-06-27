import React, { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.MINT_BLUE};
  width: 100%;
  height: 53px;
  cursor: pointer;
  padding: 20px;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 500;

  &:disabled {
    background: ${({ theme }) => theme.colors.BLACK_OPACITY_25};
  }
`;

export default Button;
