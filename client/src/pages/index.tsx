import type { NextPage, GetServerSideProps } from "next";

import { getProduct } from "src/utils/api";
import { Product } from "src/types/dto";
import ProductList from "src/components/ProductList";

interface ProductProps {
  productList: Product[];
}

const Home: NextPage<ProductProps> = ({ productList }) => {
  return (
    <div>
      {productList.length === 0 ? (
        <div>Loading</div>
      ) : (
        <ProductList productList={productList} />
      )}
    </div>
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

export default Home;
