import React from "react";
import { Product } from "src/types/dto";
import styled from "styled-components";
import ProductItem from "./ProductItem";

interface ProductListProps {
  productList: Product[];
}
const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  return (
    <Container>
      {productList.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

export default ProductList;
