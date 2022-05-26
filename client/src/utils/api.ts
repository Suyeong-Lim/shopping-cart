import { Product } from "src/types/dto";
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
export const getProductItem = async (itemId: string) => {
  const response = await api.get<Product>(`products/${itemId}`);
  return response.data;
};

// TODO: 삭제는 어케?

//carts
export const getCartItems = async () => {
  try {
    const response = await api.get<Cart>("carts");
    console.log("getCartItem API", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postCartItem = async (product: Product) => {
  console.log("카트버튼click", product);
  try {
    const res = await api.post<Cart[]>("/carts", { product });
    return res.data;
  } catch {
    console.log("product 추가 에러");
  }
};
