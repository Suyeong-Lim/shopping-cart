import React from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import CartItems from "./cartItem/CartItems";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import { getCartItems } from "src/services/api";
import useCalcCartList from "src/hooks/useCalcCartList";
import { useCartMutation } from "src/hooks/api/useCartMutation";
import * as S from "./style";
import InfoWindow from "../info/InfoWindow";
import ErrorBanner from "../common/ErrorBanner";
import Link from "next/link";

const CartList: React.FC = () => {
  const router = useRouter();
  const { data } = useQuery("/carts", getCartItems);
  const { deleteCartList, updatedcartSelctedAll } = useCartMutation();

  const { totalPrice, totalCount, cartSelectedIdList, isSelectedAll } =
    useCalcCartList(data ?? []);

  const clickHandler = () => {
    deleteCartList(cartSelectedIdList);
  };

  return (
    <>
      <S.CartHeader>장바구니</S.CartHeader>

      <S.CartWrapper>
        <S.ItemWrapper>
          <S.SelectWrapper>
            <Checkbox
              onChange={() => updatedcartSelctedAll(isSelectedAll)}
              id={"select"}
              checked={isSelectedAll}
              label={isSelectedAll ? "전체 해제" : "전체 선택"}
            />
            <S.DeleteCartBtn
              onClick={() => clickHandler()}
              disabled={cartSelectedIdList.length === 0}
            >
              상품삭제
            </S.DeleteCartBtn>
          </S.SelectWrapper>

          <div>
            {data?.length !== 0 ? (
              data?.map((cartItem) => {
                return <CartItems key={cartItem.id} Item={cartItem} />;
              })
            ) : (
              <ErrorBanner type="empty" label="장바구니를 채워주세요 !" />
            )}
          </div>
        </S.ItemWrapper>

        <S.InfoContainer>
          <InfoWindow
            title="결제예상금액"
            itemName="총 결제 예상금액"
            itemPrice={totalPrice ? totalPrice : 0}
          >
            {/* //TODO router.push 를 다 Link 를 버튼 모양으로 css */}

            <Link href={cartSelectedIdList.length === 0 ? "" : "/payments"}>
              <Button disabled={cartSelectedIdList.length === 0}>
                주문하기({totalCount}) 개
              </Button>
            </Link>
          </InfoWindow>
        </S.InfoContainer>
      </S.CartWrapper>
    </>
  );
};

export default CartList;
