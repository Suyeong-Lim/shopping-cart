import React from "react";
import { Order } from "src/types/dto";
import * as S from "./style";
import { convertPrice } from "src/hooks/useConvert";
import { useRouter } from "next/router";

interface OrderDetailProps {
  Item: Order;

  type: "list" | "detail";
}

const OrderItems: React.FC<OrderDetailProps> = ({ Item, type }) => {
  const { id, orderDetails } = Item;
  const router = useRouter();
  return (
    <>
      <S.Wrapper>
        <S.BoxHeader>
          <span>주문번호 : {id}</span>
          {type === "list" && (
            <button onClick={() => router.push(`/orders/${id}`)}>
              상세보기
            </button>
          )}
        </S.BoxHeader>

        {orderDetails.map(({ id, price, name, imageUrl, quantity }) => (
          <S.ItemContainer key={id}>
            <S.Image src={imageUrl} />
            <S.Desc>
              <p>{name}</p>
              <p>
                {convertPrice(price)} 원 / 수량 : {quantity} 개
              </p>
            </S.Desc>
          </S.ItemContainer>
        ))}
      </S.Wrapper>
    </>
  );
};

export default OrderItems;
