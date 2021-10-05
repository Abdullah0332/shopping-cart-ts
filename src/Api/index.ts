// Type
import { CartItemType } from "../Types/index";

// API
export const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();
