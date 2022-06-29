# shopping-cart
⚛️ Next, TS, 장바구니 애플리케이션 🛒 
Vite + Next + TS + React-Query 로 장바구니 구현해보기 


<h3 align="center"> 서비스 링크: https://shopping-cart-bice.vercel.app </h3>

<p align="center"><img width="500" src="https://user-images.githubusercontent.com/28384562/176394898-f7fb00ee-068f-43f8-9c59-86c93bfcc5ed.png" /></p>


## 🚀 스택

`Next` `TS` `React-Query` `Styled-Component`
 

## ✨ 구현 사항

## **베이스 레이아웃**

- [x] 베이스 레이아웃의 최상단에는 헤더가 위치하며, 스크롤되어도 고정되어 있다.
- [x] 나머지 영역은 각 페이지가 표시된다.
- [x] 각 페이지가 표시되는 영역은 최대 width가 1320px, 최소 width는 768px이다.

### **헤더**

- [x] 로고, 장바구니, 주문목록 버튼이 있다.
- [x] 로고 버튼을 클릭하면, 상품 목록 페이지로 이동한다.
- [x] [장바구니] 버튼을 클릭하면, 장바구니 페이지로 이동한다.
- [x] [주문목록] 버튼을 클릭하면, 주문 목록 페이지로 이동한다.

### **상품 목록 페이지**

- [x] 상품 목록을 조회할 수 있다.
  - 상품은 한 행에 4개씩 보여준다.
- [x] 각각의 상품에는 이미지, 이름, 가격, 장바구니 버튼이 표시된다.
- [x] [장바구니] 버튼을 클릭하면, 선택한 상품이 장바구니에 들어간다.
  - [ ] 장바구니에 상품을 추가하면 Snackbar로 유저에게 알려준다.

### **장바구니 페이지**

- [ ] 상품 목록 상단에 현재 장바구니에 담긴 상품의 개수를 보여준다.
- [x] 유저가 장바구니에 담은 상품 목록을 조회할 수 있다.
  - 장바구니 페이지 최초 진입 시 상품들은 모두 선택되어 있다.
- [x] [전체 선택] 버튼 클릭 시 전체 상품을 선택/해제할 수 있다.
- [x] 상품 목록 왼쪽의 체크박스 클릭 시 상품을 선택/해제할 수 있다.
- [x] [선택 상품 삭제] 버튼 클릭 시 선택한 상품들을 한번에 삭제할 수 있다.
- [x] 상품 목록 오른쪽의 휴지통 버튼 클릭 시 해당 상품을 삭제할 수 있다.
- [x] 상품 목록 오른쪽에서 상품의 수량을 조정할 수 있다.
  - 상품 목록 조정 시 금액에 반영되어야 한다.
- [x] 결제예상금액을 보여준다.
- [X] 주문하기 버튼을 클릭해 상품을 구매할 수 있다.

### **주문/결제 페이지**

- [x] 유저가 주문할 상품들과 전체 수량을 보여준다.
- [x] 각 주문 상품의 수량을 보여준다.
- [x] 총 결제금액을 확인할 수 있다.
- [x] 결제하기 버튼 클릭 시 결제 완료 페이지로 넘어간다.
- [x] 주문 결제한 상품은 장바구니에서 삭제된다.



## ⚙ 설치

```
# clone the project
$ git clone https://github.com/Suyeong-Lim/shopping-cart.git
# install modules
$ cd client
$ npm ci || yarn
$ npm start || yarn start
⠀  You can now view this project in the browser.
```

## 🔗 의존성

```
  "dependencies": {
    "axios": "^0.27.2",
    "json-server": "^0.17.0",
    "next": "12.1.6",
    "next-redux-wrapper": "^7.0.5",
    "react": "18.1.0",
    "react-dom": "18.1.0",
    "react-icons": "^4.3.1",
    "react-query": "^3.39.0",
    "styled-components": "^5.3.5",
    "styled-reset": "^4.3.4"
  }
```
