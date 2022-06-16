import { Product } from "src/types/dto";
import { Cart, CartItem } from "src/types/dto";
import { API_ENDPOINT } from "../utils/constants";
import axios from "axios";

export const api = axios.create({
  baseURL: API_ENDPOINT,
});

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
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
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

// 다수의 카트 삭제
export const deleteCarts = async (cartIdList: number[]) => {
  const cartIdListString = cartIdList.join(",");
  const data = await api.delete(`/carts?deleteItems=${cartIdListString}`);
  return data;
};
