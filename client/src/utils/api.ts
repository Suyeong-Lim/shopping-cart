import { Product } from "src/types/dto";
import { API_ENDPOINT } from "./constants";
import axios from "axios";

export const api = axios.create({
  baseURL: API_ENDPOINT,
});

//products
export const getProduct = async () => {
  const response = await api.get<Product>("/products");
  return response;
};
