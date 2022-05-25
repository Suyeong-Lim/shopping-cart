import { Product, ProductDetail } from "src/types/dto";
import { Cart } from "src/types/dto";
import { API_ENDPOINT } from "./constants";
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
export const getProductItem = async (itemId: number) => {
  const response = await api.get<Product>(`products/${itemId}`);
  return response.data;
};

// TODO: 삭제는 어케?

//carts
export const getCartItem = async () => {
  const response = await api.get<Cart[]>("carts");
};
