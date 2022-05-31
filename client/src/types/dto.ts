/*
  /products
*/

export interface Product {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

/*
  /carts
*/

export interface CartItem extends Product {
  quantity: number;
  selected: boolean;
}


export interface Cart {
  id: number;
  product: Product;
}

export interface CartWithQuntity {
  id: number;
  product: CartItem;
}

/*
  /orders
*/

export interface OrderDetail extends Product {
  quantity: number;
}

export interface Order {
  id: number;
  orderDetails: OrderDetail[];
}

export interface GetOrderResponse extends Order {}

export interface PostOrderResponse {
  orderDetails: OrderDetail[];
}
