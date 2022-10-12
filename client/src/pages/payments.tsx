import React from "react";
import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import { getCartItems } from "src/services/api";
import { Cart } from "src/types/dto";
import Payments from "src/components/payments/Payments";

interface PaymentsProps {
  cartList: Cart[];
}

const PaymentsPage: NextPage<PaymentsProps> = () => {
  return (
    <>
      <Head>
        <title>결제 페이지</title>
      </Head>
      <Payments />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("/cart", getCartItems);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default PaymentsPage;
