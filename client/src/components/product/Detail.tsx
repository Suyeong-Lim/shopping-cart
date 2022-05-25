import React, { ReactElement, useEffect, useState } from "react";
import { getProductItem } from "src/utils/api";
import { Product } from "src/types/dto";
import ProductDetailCard from "./ProductDetailCard";
import ProductDetail from "src/pages/products/[productId]";

const Detail = ({ itemId }: { itemId: string }): ReactElement => {
  const [productDetail, setProductDetail] = useState<Product | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProductItem(+itemId);
        setProductDetail(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (itemId) {
      getData();
    }
  }, [itemId]);

  console.log(productDetail);
  return (
    <div>
      {ProductDetail !== null ? (
        <ProductDetailCard item={productDetail} />
      ) : null}
    </div>
  );
};

export default Detail;
