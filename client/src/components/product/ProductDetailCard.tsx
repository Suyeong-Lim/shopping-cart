import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";

import { Product, Cart } from "src/types/dto";
import { addCartItem, getProductItem } from "src/services/api";
import { convertPrice } from "src/utils/convertPrice";
import { useCartMutation } from "../../hooks/useCartItemMutation";

interface ItemProps {
  productItem: Product;
}

const ProductDetailCard = ({ productItem }: ItemProps) => {
  const { id, price, name, imageUrl } = productItem;

  const { data } = useQuery(["/product", id], () => {
    getProductItem(String(id));
  });

  const { addCart } = useCartMutation();

  const addCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!productItem) return;
    addCart(productItem);
  };

  return (
    <ProductContainer>
      <Image src={imageUrl} />
      <ProductName>{name}</ProductName>
      <Line />
      <ProductPrice>
        금액 <div>{convertPrice(price)} 원</div>
      </ProductPrice>
      <CartButton onClick={addCartHandler}>장바구니</CartButton>
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
