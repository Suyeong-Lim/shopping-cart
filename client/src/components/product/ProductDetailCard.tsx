import React from "react";
import { Product, Cart } from "src/types/dto";
import styled from "styled-components";
import { postCartItem } from "src/utils/api";

interface ItemProps {
  productItem: Product;
}

const ProductDetailCard = ({ productItem }: ItemProps) => {
  const { id, price, name, imageUrl } = productItem;

  const addToCart = () => {
    console.log("상품 추가!!");
    
    
    //수량  +1
    //
    postCartItem(productItem);

    // 있으면 => 수량 (quantity) +1
    // 없으면 => postCartItem()
    //id만 하는게 좋다. 결합도 낮추기. (근데 명세가 ㅎ;; id 보내서 카트에서는 api 분해해서 쓰기)
    //id 만 담도록. 상태를 동적으로 가지지 않게 해얗..? 옵저버 패턴
    //마넌에서 만오처넌 바뀌면 ?.? ㅋㅋㅋ아
    //사용자의 장바구니에선 마넌인데, 반영이 안되는 문제가 생긴다.
    // 사용자 장바구니 데이터 서칭해서 업데이트 해야하는데
    // 불필요한 데이터 다 업데이트 치는.. 그거임.. 안티 패턴
  };

  return (
    <ProductContainer>
      <Image src={imageUrl} />
      <ProductName>{name}</ProductName>
      <Line />
      <ProductPrice>
        금액 <div>{price} 원</div>
      </ProductPrice>
      <CartButton onClick={addToCart}>장바구니</CartButton>
    </ProductContainer>
  );
};
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;
const Image = styled.img`
  width: 400px;
`;

const Line = styled.hr`
  width: 400px;
  margin-top: 20px;
`;
const ProductName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.title};
  margin-top: 30px;
  margin-left: 15px;
`;

const ProductPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.text};
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

const CartButton = styled.button`
  background-color: #73675c;
  color: ${({ theme }) => theme.colors.WHITE};
  cursor: pointer;
  height: 45px;
  font-size: ${({ theme }) => theme.fontSize.text};
  margin-top: 15px;
`;
export default ProductDetailCard;
