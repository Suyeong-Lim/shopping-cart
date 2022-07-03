import { Product, Cart, Order, OrderItem } from "src/types/dto";
import { API_ENDPOINT } from "../utils/constants";
import axios from "axios";

export const api = axios.create({
  baseURL: API_ENDPOINT,
});
api.defaults.withCredentials = true;

//products
//상품 목록 조회
export const getProduct = async () => {
  const response = await api.get<Product[]>("products");
  return response.data;
};

//TODO: 상품 추가

//상품 단일 조회
export const getProductItem = async (itemId: string) => {
  const response = await api.get<Product>(`products/${itemId}`);
  return response.data;
};

//carts
export const getCartItems = async () => {
  try {
    const response = await api.get<Cart[]>("carts");
    return response.data;
  } catch (error) {
    console.log(`cartItem fetch 에러${error}`);
  }
};

export const addCartItem = async (product: Product) => {
  try {
    const res = await api.post<Product>("/carts", { product });
    return res.data;
  } catch {
    console.log("product 추가 에러");
  }
};

export const updateCartItem = async (cartId: number, quantity: number) => {
  const data = await api.patch(`/carts/${cartId}/quantity`, { quantity });
  return data;
};

// 다수의 카트 삭제
export const deleteCarts = async (cartIdList: number[]) => {
  const cartIdListString = cartIdList.join(",");
  const data = await api.delete(`/carts?deleteItems=${cartIdListString}`);
  return data;
};
//단일 카트 아이템 삭제
export const deleteCartItem = async (cartId: number) => {
  try {
    const res = await api.delete(`/carts/${cartId}`);
    return res.data;
  } catch {
    console.log("삭제 에러");
  }
};

export const updateCartSelected = async (cartId: number, selected: boolean) => {
  const data = await api.patch(`/carts/${cartId}/selected`, { selected });
  return data;
};

export const updatedSelectedAll = async (selected: boolean) => {
  const data = await api.patch("/carts/selected", { selected });
  return data;
};

export const deleteSelectedCarts = async (cartIdList: number[]) => {
  const cartIdListString = cartIdList.join(",");
  const data = await api.delete(`carts?deleteItems=${cartIdListString}`);
  return data;
};

/**주문 order-services */

export const getOrderList = async () => {
  const response = await api.get<Order[]>("/orders");
  return response.data;
};

export const getOrderItem = async (orderId: string) => {
  const response = await api.get<Order>(`/orders/${orderId}`);
  return response.data;
};

export const addOrder = async (orderDetails: OrderItem[]) => {
  const data = await api.post<OrderItem[]>("/orders", { orderDetails });
  return data;
};
