import React, { useEffect, useState } from "react";
import { Cart, CartItem } from "src/types/dto";
import styled from "styled-components";
import { deleteCartItem } from "src/services/api";
import { addCartItem } from "src/services/api";
import { useCartMutation } from "./hook/useCartMutation";
import { convertPrice } from "src/utils/convertPrice";

interface Props {
  Item: Cart;
}

const CartItems: React.FC<Props> = ({ Item }) => {
  const { name, imageUrl, price, quantity, selected } = Item.product;
  const { plus, minus, drop } = useCartMutation(Item);

  const onClickHandler = () => {
    if (1 < Item.product.quantity) {
      minus();
    }
  };

  return (
    <Container>
      <input type="checkbox" />
      <LeftContainer>
        <Image src={imageUrl} />
        <span>{name}</span>
      </LeftContainer>

      <RightContainer>
        <DeleteButton onClick={() => drop()}>X</DeleteButton>
        <div>
          <span>{quantity}</span>
          <Button onClick={() => plus()}>+</Button>
          <Button onClick={() => onClickHandler()}>-</Button>
        </div>

        <div>{convertPrice(price * quantity)} 원</div>
      </RightContainer>
    </Container>
  );
};

const Button = styled.button`
  cursor: pointer;
`;
const DeleteButton = styled.button`
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #111;
`;

const Image = styled.img`
  width: 134px;
`;
const AddInput = styled.input`
  border: 1px solid #454545;
  width: 73px;
  height: 40px;
`;
const LeftContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  span {
    margin-left: 20px;
  }
  padding: 20px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export default CartItems;
