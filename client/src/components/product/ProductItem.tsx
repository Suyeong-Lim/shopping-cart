import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { URL } from "src/utils/url";
import { Product } from "src/types/dto";
import { convertName, convertPrice } from "./hook/useConvert";
import { BsCart4 } from "react-icons/bs";
import { useCartMutation } from "../../hooks/useCartItemMutation";
import { useQuery } from "react-query";

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const { id, name, price, imageUrl } = product;

  const { addCart } = useCartMutation();

  const addCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!product) return;
    addCart(product);
  };

  return (
    <Container>
      <Link href={URL.PRODUCT_DETAIL(id)} passHref>
        <img src={imageUrl} />
      </Link>
      <InfoContainer>
        <Info>
          <Name>{convertName(name)}</Name>
          <Price>{convertPrice(price)} 원</Price>
        </Info>
        <CartButton onClick={addCartHandler}>
          <BsCart4 size={30} />
        </CartButton>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const Info = styled.div`
  flex: 9;
  padding: 10px 15px;
`;

const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSize.title};
  padding-bottom: 5px;
  margin-bottom: 10px;
  height: 21px;
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.fontSize.text};
  font-weight: 500;
`;

const CartButton = styled.button`
  flex: 1;
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.ORANGE_700};
    color: ${({ theme }) => theme.colors.WHITE};
  }
`;
export default ProductItem;
