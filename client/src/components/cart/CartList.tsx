import React, { useEffect, useState } from "react";
import { Cart } from "src/types/dto";
import CartItems from "./CartItems";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getCartItems } from "src/services/api";

const CartList: React.FC = () => {
  const { data } = useQuery("/carts", getCartItems);

  return (
    <CartContainer>
      <CartHeader>
        <span>장바구니</span>
        <hr />
      </CartHeader>

      <CartWrapper>
        <div>
          {data &&
            data.map((cartItem) => {
              return <CartItems key={cartItem.id} Item={cartItem} />;
            })}
        </div>
        <PayContainer>
          <span>결제예상금액</span>
          <hr />
          <span>결제예상금액 27,100원</span>
          <button>주문하기(2)개</button>
        </PayContainer>
      </CartWrapper>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 130px;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.bigTitle};
  font-weight: 600;
  span {
    margin-bottom: 5px;
  }
  hr {
    width: 80%;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PayContainer = styled.div`
  border: 1px solid #ddd;
  width: 17rem;
  padding: 20px;
  margin-left: 100px;
  height: 300px;
  hr {
    margin-bottom: 30px;
  }
  span {
    margin-top: 20px;
  }
  button {
    background: #2ac1bc;
    width: 14rem;
    height: 53px;
    cursor: pointer;
    padding: 20px;
    margin-top: 50px;
    color: ${({ theme }) => theme.colors.WHITE};
  }
`;

export default CartList;
