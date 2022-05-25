import React from "react";
import { useRouter } from "next/router";
import Detail from "src/components/product/Detail";

const ProductDetail = () => {
  const router = useRouter();
  const id = router.query.productId;

  //send a request to the backend API
  //to fetch the news item with itemId

  return (
    <div>
      <Detail itemId={id as string } />
    </div>
  );
};

export default ProductDetail;
