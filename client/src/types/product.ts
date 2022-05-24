// export interface Product {
//   productItem: ProductDetail;
// }

// export interface ProductDetail {
//   id: number;
//   price: number;
//   name: string;
//   imageUrl: string;
// }

export interface Product {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

export interface GetProdutResponse extends Product {}

export interface PostProductRequest {
  product: Omit<Product, "id">;
}
