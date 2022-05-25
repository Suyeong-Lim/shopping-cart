import React from "react";
import { Product } from "src/types/dto";
import styled from "styled-components";
import Link from "next/link";
import { URL } from "src/utils/url";

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const { id, name, price, imageUrl } = product;

  return (
    <Container>
      <Link href={URL.PRODUCT_DETAIL(id)} passHref>
        <Image src={imageUrl} />
      </Link>
      <InfoContainer>
        <Name>{name}</Name>
        <Price>
          {price} <span>원</span>
        </Price>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  gap: 1rem;
`;

const Image = styled.img`
  width: 17.625rem;
  height: 17.625rem;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 10px;
`;

const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSize.text};
`;

const Price = styled.span`
  font-size: ${({ theme }) => theme.fontSize.title};
`;

export default ProductItem;
