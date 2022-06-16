import React, { useEffect, useState } from "react";
import { Cart } from "src/types/dto";
import CartItems from "./CartItems";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getCartItems } from "src/services/api";
import { convertPrice } from "src/utils/convertPrice";
import theme from "src/styles/theme";
import Checkbox from "../common/Checkbox";
import useCalcCartList from "src/hooks/useCalcCartList";
import { useCartMutation } from "src/hooks/useCartItemMutation";

const CartList: React.FC = () => {
  const { data } = useQuery("/carts", getCartItems);
  const { deleteCartList, updatedcartSelctedAll } = useCartMutation();

  if (!data) return <div>No data</div>;
  const { totalPrice, totalCount, cartSelectedIdList, isSelectedAll } =
    useCalcCartList(data);

  const clickHandler = () => {
    deleteCartList(cartSelectedIdList);
  };

  return (
    <CartContainer>
      <CartHeader>
        <span>장바구니</span>
        <hr />
      </CartHeader>

      <CartWrapper>
        <div>
          <SelectWrapper>
            <Checkbox
              onChange={() => updatedcartSelctedAll(isSelectedAll)}
              id={"select"}
              label={"선택해제"}
              checked={isSelectedAll}
            />
            <DeleteCartBtn
              onClick={() => clickHandler()}
              disabled={cartSelectedIdList.length === 0}
            >
              상품삭제
            </DeleteCartBtn>
          </SelectWrapper>

          {data &&
            data.map((cartItem) => {
              return <CartItems key={cartItem.id} Item={cartItem} />;
            })}
        </div>
        <PayContainer>
          <span>결제예상금액</span>
          <hr />
          <PayTxt>
            <span>결제예상금액</span>
            <span>{totalPrice ? convertPrice(+totalPrice) : "0"}원</span>
          </PayTxt>
          <button disabled={cartSelectedIdList.length === 0}>
            주문하기({totalCount}) 개
          </button>
        </PayContainer>
      </CartWrapper>
    </CartContainer>
  );
};

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-between;
`;

const DeleteCartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 40px;
  border: 1px solid ${theme.colors.GRAY_300};
`;

const PayTxt = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    box-shadow: inset 0 -11px 0 ${theme.colors.MINT_300};
    line-height: 21px;
    font-weight: 500;
    font: ${theme.fontSize.title};
    letter-spacing: 1px;
  }
`;
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
  width: 80%;
  padding: 20px;
`;

const PayContainer = styled.div`
  border: 1px solid #ddd;
  width: 17rem;
  padding: 20px;
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
