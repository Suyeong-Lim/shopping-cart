import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getOrderItem } from "src/services/api";
import OrderItems from "./orderItem/OrderItems";
import InfoWindow from "../info/InfoWindow";
import * as S from "./style";

const OrderDetail = () => {
  const router = useRouter();
  const { orderId } = router.query;

  const { data } = useQuery(["/orders", orderId], () =>
    getOrderItem(String(orderId))
  );

  const totalPrice = data?.orderDetails.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );

  return (
    <div>
      {data && (
        <S.Wrapper>
          <OrderItems type={"list"} Item={data} />
          <S.InfoWrapper>
            <InfoWindow
              title="결제금액 정보"
              itemName="총 결제금액"
              itemPrice={totalPrice || 0}
              width="400px"
            />
          </S.InfoWrapper>
        </S.Wrapper>
      )}
    </div>
  );
};

export default OrderDetail;
