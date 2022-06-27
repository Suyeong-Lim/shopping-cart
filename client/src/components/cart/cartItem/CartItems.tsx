import React, { useEffect, useState } from "react";
import { Cart, CartItem } from "src/types/dto";
import styled from "styled-components";
import { useCartMutation } from "../../../hooks/api/useCartMutation";
import { convertPrice } from "src/hooks/useConvert";
import Checkbox from "../../common/Checkbox";
import theme from "src/styles/theme";
import { BsTrash } from "react-icons/bs";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface Props {
  Item: Cart;
}

const CartItems: React.FC<Props> = ({ Item }) => {
  const { name, imageUrl, price, quantity, selected } = Item.product;
  const { plus, minus, drop, updateSelected } = useCartMutation();

  const onClickHandler = () => {
    if (1 < Item.product.quantity) {
      minus(Item);
    }
  };

  return (
    <Container>
      <LeftContainer>
        <Checkbox
          id={`check_${name}`}
          onChange={() => updateSelected(Item)}
          checked={selected}
        />
        <Image src={imageUrl} />
        <span>{name}</span>
      </LeftContainer>

      <RightContainer>
        <DeleteButton
          type="button"
          aria-label={`${name} 상품 삭제하기`}
          onClick={() => drop(Item)}
        >
          <BsTrash size={20} fill={theme.colors.BLACK_TEXT} />
        </DeleteButton>

        <QuantityContainer>
          <Quantity>{quantity}</Quantity>
          <QuantityButtons>
            <Button onClick={() => plus(Item)}>
              <TiArrowSortedUp size={15} />
            </Button>
            <Button onClick={() => onClickHandler()}>
              <TiArrowSortedDown size={15} />
            </Button>
          </QuantityButtons>
        </QuantityContainer>

        <div>{convertPrice(price * quantity)} 원</div>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #111;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  display: flex;
  span {
    font-size: ${({ theme }) => theme.fontSize.title};
    margin-left: 20px;
    margin-top: 8px;
  }
  padding: 20px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-evenly;
`;

const Button = styled.button`
  cursor: pointer;
`;
const DeleteButton = styled.button`
  cursor: pointer;
  &:hover {
    background-color: #ff7e64b5;
  }
`;

const Image = styled.img`
  width: 134px;
`;

const QuantityContainer = styled.div`
  display: flex;
`;

const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 73px;
  height: 44px;
  font-size: ${theme.fontSize.title};
  border: 1px solid ${theme.colors.GRAY_HEAD};
`;

const QuantityButtons = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSize.title};

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 22px;
    border: 1px solid #dddddd;
  }
`;

export default CartItems;
