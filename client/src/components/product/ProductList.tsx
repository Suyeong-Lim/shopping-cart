import React from "react";
import { useQuery } from "react-query";
import { Product } from "src/types/dto";
import { getProduct } from "src/services/api";
import styled from "styled-components";
import ProductItem from "./productItem/ProductItem";

interface ProductListProps {
  productList: Product[];
}
const ProductList: React.FC<ProductListProps> = () => {
  const { status, data } = useQuery<Product[]>("/products", getProduct);
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <span>Error...</span>;
  }
  return (
    <Container>
      {data &&
        data.map((product) => {
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
