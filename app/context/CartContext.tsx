"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import {
  ShoppingCart,
  CartItem,
} from "@/app/interfaces/shopping_cart/shopping_cart";
import { Product } from "../interfaces/product/product";

// Define the shape of the context
interface ShoppingCartContextType {
  cart: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
}

// Create the context
const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined
);

// Define the reducer function
type Action =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "CLEAR_CART" };

const shoppingCartReducer = (state: CartItem[], action: Action): CartItem[] => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state];
        console.log(updatedCart);
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [
          ...state,
          { product: action.payload, quantity: 1, price: 2.99 },
        ];
      }
    case "REMOVE_ITEM":
      const itemToDeleteIndex = state.findIndex(
        (item) => item.product.id === action.payload
      );
      if (itemToDeleteIndex !== -1) {
        const updatedCart = state;
        console.log(updatedCart, itemToDeleteIndex);
        if (updatedCart[itemToDeleteIndex].quantity > 1) {
          updatedCart[itemToDeleteIndex].quantity -= 1;
          return updatedCart;
        } else {
          return state.filter((item) => item.product.id !== action.payload);
        }
      }
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

// Define the context provider
interface CartProviderProps {
  children: ReactNode;
}

// Create the provider component
export const ShoppingCartProvider: React.FC<CartProviderProps> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(shoppingCartReducer, []);

  const addItem = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeItem = (itemId: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cart, addItem, removeItem, clearCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Custom hook to access the shopping cart context
export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};
