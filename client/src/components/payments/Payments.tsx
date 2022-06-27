import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import * as S from "./style";
import { getCartItems } from "src/services/api";
import useCalcCartList from "src/hooks/useCalcCartList";
import { convertPrice } from "src/hooks/useConvert";
import { useCartMutation } from "src/hooks/api/useCartMutation";
import { useOrderMutation } from "src/hooks/api/useOrderMutation";
import PaymentsItem from "./paymentsItem/PaymentsItem";
import InfoWindow from "../info/InfoWindow";
import Button from "../common/Button";

const Payments = () => {
  const { data } = useQuery("/carts", getCartItems, {
    select: (carts) => carts?.filter((item) => item.product.selected),
  });

  const { totalPrice, cartSelectedIdList, purchaseList } = useCalcCartList(
    data ?? []
  );

  const { deleteSelectedCartItem } = useCartMutation();
  const { addOrder } = useOrderMutation();

  const router = useRouter();
  const orderselectedCarts = () => {
    deleteSelectedCartItem(cartSelectedIdList);
    addOrder(purchaseList);
    router.push(`/orderComplete`);
  };

  return (
    <>
      <S.Header> 주문 / 결제 🛒 </S.Header>
      <S.PaymentsWrapper>
        <S.PaymentsItemContainer>
          <S.PaymentHeader> 주문 상품 {data?.length}건</S.PaymentHeader>
          <>
            {data &&
              data.map((paymentsItem) => {
                return (
                  <PaymentsItem key={paymentsItem.id} Item={paymentsItem} />
                );
              })}
          </>
        </S.PaymentsItemContainer>

        <S.InfoContainer>
          <InfoWindow
            title="결제금액"
            itemName="총 결제 금액"
            itemPrice={totalPrice}
          >
            <Button onClick={orderselectedCarts}>
              {`${convertPrice(totalPrice)}원`} 결제하기
            </Button>
          </InfoWindow>
        </S.InfoContainer>
      </S.PaymentsWrapper>
    </>
  );
};

export default Payments;
