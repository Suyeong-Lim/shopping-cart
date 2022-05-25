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
      {productList.map((product, idx) => {
        return <ProductItem product={product} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border: 1px solid brown;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem 5rem;
  gap: 3rem;
`;

export default ProductList;
