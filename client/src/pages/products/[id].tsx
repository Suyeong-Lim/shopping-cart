import React from "react";
import { useRouter } from "next/router";

const DetailPate = () => {
  const router = useRouter();
  const itemId = router.query.id;

  //send a request to the backend API
  //to fetch the news item with itemId

  return <div>?</div>;
};

export default DetailPate;
