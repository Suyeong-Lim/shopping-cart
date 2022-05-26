//url 상수화

export const URL = {
  HOME: () => "/",
  PRODUCT_DETAIL: (productId: string | number) => `/products/${productId}`,
  CART: () => "/cart",
  ORDER: () => "/order",
} as const;
