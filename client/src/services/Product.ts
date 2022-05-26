import ky from "ky";
import { Product } from "src/types/dto";

const api = ky.create({ prefixUrl: "http://localhost:3003/" });

export const loadProducts = async () => {
  try {
    return await api.get("products").json<Product[]>();
  } catch (err) {
    throw new Error("Faild to load Products");
  }
};
