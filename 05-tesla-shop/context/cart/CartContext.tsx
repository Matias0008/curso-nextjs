import { createContext } from "react";

import { ICartProduct } from "@/interfaces";
import { ShippingAddress } from "./CartProvider";

interface Context {
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  taxRate: number;
  total: number;
  isLoaded: boolean;
  shippingAddress?: ShippingAddress;

  // ==> Metodos
  updateAddress: (address: ShippingAddress) => void;
  addProductToCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct, newQuantity: number) => void;
  deleteItemFromCart: (product: ICartProduct) => void;
}

export const CartContext = createContext({} as Context);
