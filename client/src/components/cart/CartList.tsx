import React, { useEffect, useState } from "react";
import { Cart } from "src/types/dto";
import CartItem from "./CartItem";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getCartItems } from "src/utils/api";
import { CartWithQuntity } from "src/types/dto";

const CartList: React.FC = () => {
  const [orderItemList, setOrderItemList] = useState<CartWithQuntity[]>([]);
  const { data } = useQuery("/carts", getCartItems);

  // TODO: 데이터 패칭 시에 필터링해서 동일한 제품일 경우에 수량을 올려준다

  // console.log(data);

  // 수량 계산이 완료된 객체의 배열을 반환
  const getCartWithQuantity = (data: Cart[]) => {
    const arr: CartWithQuntity[] = [];

    data.forEach((item) => {
      if (arr.find((el) => el.product.id === item.product.id)) {
        const existedItem = arr.find((el) => el.product.id === item.product.id);
        if (existedItem) existedItem.product.quantity += 1;
      } else {
        arr.push({
          id: item.id,
          product: {
            ...item.product,
            quantity: 1,
            selected: false,
          },
        });
      }
    });

    return arr;
  };

  useEffect(() => {
    if (data) {
      const filterdData = getCartWithQuantity(data);
      setOrderItemList(filterdData);
    }
  }, [data]);

  console.log("set", orderItemList);

  // const arr: CartWithQuntity[] = [];
  // const filteredData: CartWithQuntity[] = data?.map((item) => {
  //   // item이 arr 안에 없으면 그냥 넣어주고 있으면 quantitiy 필드에 +1 해준다.
  //   if (arr.find((el) => el.product.id === item.product.id)) {
  //     // const existedItem = arr.find((el) => el.product.id === item.product.id);
  //     // if (existedItem) existedItem.product.quantity += 1;
  //   } else {
  //     return {
  //       product: {
  //         ...item.product,
  //         quantity: 1,
  //         selected: false,
  //       },
  //     };
  //   }
  // });
  // setOrderItemList(arr);
  // console.log("arr", arr);

  //상품 갯수 추가 , 갯수 감소 버튼 클릭시 increase, decrease quantity 함수 호출 quantiy만 -1 해주기?
  //value = id 같은 프로덕트 갯수 세서? count?
  // Todo: id 같은 프로덕트 인거의 수량 갯수 세서 밸류 값으로 넣어주고 저거 innput value ? 설정?

  return (
    <CartContainer>
      <CartHeader>
        <span>장바구니</span>
        <hr />
      </CartHeader>

      <CartWrapper>
        <div>
          {orderItemList &&
            orderItemList.map((cartItem) => {
              return <CartItem key={cartItem.id} cartItem={cartItem} />;
            })}
        </div>
        <PayContainer>
          <span>결제예상금액</span>
          <hr />
          <span>결제예상금액 27,100원</span>
          <button>주문하기(2)개</button>
        </PayContainer>
      </CartWrapper>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 130px;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.bigTitle};
  font-weight: 600;
  span {
    margin-bottom: 5px;
  }
  hr {
    width: 80%;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PayContainer = styled.div`
  border: 1px solid #ddd;
  width: 17rem;
  padding: 20px;
  margin-left: 100px;
  height: 300px;
  hr {
    margin-bottom: 30px;
  }
  span {
    margin-top: 20px;
  }
  button {
    background: #2ac1bc;
    width: 14rem;
    height: 53px;
    cursor: pointer;
    padding: 20px;
    margin-top: 50px;
    color: ${({ theme }) => theme.colors.WHITE};
  }
`;
export default CartList;
