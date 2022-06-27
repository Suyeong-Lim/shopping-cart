import React from "react";
import { Cart } from "src/types/dto";
import * as S from "./style";

interface Props {
  Item: Cart;
}

const PaymentsItem: React.FC<Props> = ({ Item }) => {
  const { name, imageUrl, price, quantity, selected } = Item.product;

  return (
    <S.Container>
      <S.Image src={imageUrl} />
      <S.Desc>
        <S.ItemName>{name}</S.ItemName>
        <S.ItemQuantity>수량 : {quantity}</S.ItemQuantity>
      </S.Desc>
    </S.Container>
  );
};

export default PaymentsItem;
