import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { URL } from "src/utils/url";
import { Product } from "src/types/dto";
import { convertName, convertPrice } from "../../../hooks/useConvert";
import { BsCart4 } from "react-icons/bs";
import { useCartMutation } from "../../../hooks/api/useCartMutation";

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
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
`;

const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSize.text};
  padding-bottom: 5px;
  margin-bottom: 10px;
  height: 21px;
  line-height: 24px;
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smtitle};
  font-weight: 500;
`;

const CartButton = styled.button`
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.CYAN};
    color: ${({ theme }) => theme.colors.WHITE};
  }
`;
export default ProductItem;
