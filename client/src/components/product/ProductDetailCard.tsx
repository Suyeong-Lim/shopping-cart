import React from "react";
import { Product } from "src/types/dto";
import styled from "styled-components";

interface ItemProps {
  item: Product | null;
}

const ProductDetailCard = ({ item }: ItemProps) => {
  //   const { id, price, name, imageUrl } = item;
  return <div>??</div>;
};

const Image = styled.img`
  width: 3rem;
`;

export default ProductDetailCard;
