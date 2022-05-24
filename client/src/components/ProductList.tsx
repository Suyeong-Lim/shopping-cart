import React from "react";
import { Product } from "src/types/dto";
interface ProductListProps {
  productList: Product[];
}
const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  return (
    <>
      {productList.map((item, idx) => {
        return <li key={idx}>{item.name}</li>;
      })}
    </>
  );
};

export default ProductList;
