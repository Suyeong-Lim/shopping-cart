/*
  /products
*/

export interface Product {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
  selected: boolean;
}

/*
  /carts
*/

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
