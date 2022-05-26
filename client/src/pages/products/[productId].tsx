import React from "react";
import { Product } from "src/types/dto";
import { GetServerSideProps, NextPage } from "next";
import { getProductItem } from "src/utils/api";
import ProductDetailCard from "src/components/product/ProductDetailCard";
import styled from "styled-components";

interface DetailProps {
  productItem: Product;
}
// 1,2,3 => SSR product Item => Product (id,name,url)

const ProductDetail: NextPage<DetailProps> = ({ productItem }) => {
  console.log(productItem);

  return (
    <Container>{<ProductDetailCard productItem={productItem} />}</Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

type ProductDetailParams = {
  productId: string;
};

export const getServerSideProps: GetServerSideProps<
  DetailProps,
  ProductDetailParams
> = async (context) => {
  const { productId } = context.params!;
  console.log(productId);

  const data = await getProductItem(productId);

  return {
    props: { productItem: data },
  };
};

export default ProductDetail;
