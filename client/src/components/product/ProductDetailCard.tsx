import React from "react";
import { Product } from "src/types/dto";
import styled from "styled-components";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as cartSliceActions from "src/store/modules/cartSlice";

interface ItemProps {
  productItem: Product;
}

const ProductDetailCard = ({ productItem }: ItemProps) => {
  const dispatch = useDispatch();
  const value = useSelector(({ cartSlice }: any) => cartSlice.value);

  const add = useCallback(
    ({ value }: any) => {
      dispatch(cartSliceActions.increment({ value }));
    },
    [dispatch]
  );

  const { id, price, name, imageUrl } = productItem;
  return (
    <ProductContainer>
      <Image src={imageUrl} />
      <ProductName>{name}</ProductName>
      <Line />
      <ProductPrice>
        금액 <div>{price} 원</div>
      </ProductPrice>
      <span>{value}</span>
      <CartButton onClick={() => add({ value })}>장바구니</CartButton>
    </ProductContainer>
  );
};
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;
const Image = styled.img`
  width: 400px;
`;

const Line = styled.hr`
  width: 400px;
  margin-top: 20px;
`;
const ProductName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.title};
  margin-top: 30px;
  margin-left: 15px;
`;

const ProductPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.text};
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

const CartButton = styled.button`
  background-color: #73675c;
  color: ${({ theme }) => theme.colors.WHITE};
  cursor: pointer;
  height: 45px;
  font-size: ${({ theme }) => theme.fontSize.text};
  margin-top: 15px;
`;
export default ProductDetailCard;
