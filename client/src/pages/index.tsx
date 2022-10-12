import type { NextPage, GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { getProduct } from "src/services/api";
import { Product } from "src/types/dto";
import ProductList from "src/components/product/ProductList";
import styled from "styled-components";
import Breakpoints from "src/styles/breakpoints";

interface ProductProps {
  productList: Product[];
}

const Home: NextPage<ProductProps> = ({ productList }) => {
  return (
    <Conatiner>
      <ProductList productList={productList} />
    </Conatiner>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("/products", getProduct);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Conatiner = styled.div`
  display: flex;
  align-items: center;
  width: ${Breakpoints.xlarge}px;
`;
export default Home;
