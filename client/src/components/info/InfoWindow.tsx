import React from "react";
import * as S from "./style";
import { convertPrice } from "src/hooks/useConvert";

type InfoWindowProps = {
  title: string;
  itemName: string;
  itemPrice: number;
  width?: string;
  children?: React.ReactNode;
};

const InfoWindow = ({
  title,
  itemName,
  itemPrice,
  width = "100%",
  children,
}: InfoWindowProps) => {
  return (
    <S.Container width={width}>
      <S.ResultTitle>{title}</S.ResultTitle>
      <S.ResultContainer>
        <S.ResultInfo>
          <span>{itemName}</span>
          <span>{convertPrice(itemPrice)}원</span>
        </S.ResultInfo>
        {children}
      </S.ResultContainer>
    </S.Container>
  );
};

export default InfoWindow;
