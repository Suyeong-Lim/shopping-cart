import type { NextPage, GetServerSideProps } from "next";
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
      {productList.length === 0 ? (
        <div>Loading</div>
      ) : (
        <ProductList productList={productList} />
      )}
    </Conatiner>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const productData = await getProduct();

  return {
    props: {
      productList: productData,
    },
  };
};

const Conatiner = styled.div`
  display: flex;
  align-items: center;
  width: ${Breakpoints.xlarge}px;
`;
export default Home;
