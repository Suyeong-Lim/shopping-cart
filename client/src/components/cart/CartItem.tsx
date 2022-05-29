import React from "react";
import { CartWithQuntity } from "src/types/dto";
import styled from "styled-components";
import { deleteCartItem } from "src/utils/api";

interface Props {
  cartItem: CartWithQuntity;
}

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const deleteToCart = (id: number) => {
    console.log("상품 삭제");
    deleteCartItem(id);
  };

  return (
    <Container>
      <input type="checkbox" />
      <LeftContainer>
        <Image src={cartItem.product.imageUrl} />
        <span>{cartItem.product.name}</span>
      </LeftContainer>

      <RightContainer>
        <DeleteButton>X</DeleteButton>
        <div>
          <span>{cartItem.product.quantity}</span>
          <Button>+</Button>
          <Button>-</Button>
        </div>

        <div>{cartItem.product.price} 원</div>
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
export default CartItem;
