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
  const data = await api.patch(`/carts/quantity/${cartId}`, { quantity });
  return data;
};

export const deleteCartItem = async (cartId: number) => {
  try {
    const res = await api.delete(`/carts/${cartId}`);
    return res.data;
  } catch {
    console.log("삭제 에러");
  }
};
