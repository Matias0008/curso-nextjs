import { useEffect, useReducer } from "react";
import Cookies from "js-cookie";

import { CartContext, cartReducer } from "./";
import { ICartProduct } from "@/interfaces";

export interface CartState {
  isLoaded: boolean;
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  taxRate: number;
  total: number;
  shippingAddress?: ShippingAddress;
}

export interface ShippingAddress {
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  zip: string;
}

const Cart_INITIAL_STATE: CartState = {
  isLoaded: false,
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  taxRate: 0,
  total: 0,
  shippingAddress: undefined,
};

interface ProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, Cart_INITIAL_STATE);

  useEffect(() => {
    if (Cookies.get("cart")) {
      const cartCookie = JSON.parse(Cookies.get("cart")!);
      dispatch({
        type: "[Cart] - Load cart from cookies | storage",
        payload: cartCookie,
      });
    }
  }, []);

  useEffect(() => {
    Cookies.set("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    if (Cookies.get("address")) {
      dispatch({
        type: "[Cart] - Load shipping address from cookies",
        payload: JSON.parse(Cookies.get("address")!),
      });
    }
  }, []);

  useEffect(() => {
    const numberOfItems = state.cart.reduce((prev, current) => current.quantity + prev, 0);
    const subTotal = state.cart.reduce(
      (prev, current) => current.price * current.quantity + prev,
      0
    );
    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

    const orderSummary = {
      numberOfItems,
      subTotal,
      taxRate: subTotal * taxRate,
      total: subTotal * (taxRate + 1),
    };
    dispatch({
      type: "[Cart] - Update order summary",
      payload: orderSummary,
    });
  }, [state.cart]);

  const addProductToCart = (product: ICartProduct) => {
    const productInCart = state.cart.some((p) => p._id === product._id);
    if (!productInCart) {
      return dispatch({
        type: "[Cart] - Update products in cart",
        payload: [...state.cart, product],
      });
    }

    const productInCartButDifferentSize = state.cart.some(
      (p) => p.size === product.size && p._id === product._id
    );
    if (!productInCartButDifferentSize) {
      return dispatch({
        type: "[Cart] - Update products in cart",
        payload: [...state.cart, product],
      });
    }

    const updateProducts = state.cart.map((p) => {
      if (p._id !== product._id) return p;
      if (p.size !== product.size) return p;

      // En condiciones para acumular la cantidad
      p.quantity += product.quantity;
      return p;
    });
    return dispatch({
      type: "[Cart] - Update products in cart",
      payload: updateProducts,
    });
  };

  const updateCartQuantity = (product: ICartProduct, newQuantity: number) => {
    product.quantity = newQuantity;
    dispatch({
      type: "[Cart] - Change cart quantity",
      payload: product,
    });
  };

  const deleteItemFromCart = (product: ICartProduct) => {
    dispatch({
      type: "[Cart] - Delete item from cart",
      payload: product,
    });
  };

  const updateAddress = (address: ShippingAddress) => {
    Cookies.set("address", JSON.stringify(address));
    dispatch({
      type: "[Cart] - Update address",
      payload: address,
    });
  };

  return (
    <CartContext.Provider
      value={{
        updateAddress,
        ...state,
        addProductToCart,
        updateCartQuantity,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
