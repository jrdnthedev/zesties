"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import {
  ShoppingCart,
  CartItem,
} from "@/app/interfaces/shopping_cart/shopping_cart";

// Define the shape of the context
interface ShoppingCartContextType {
  cart: ShoppingCart;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
}

// Create the context
const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined
);

// Define the reducer function
type Action =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "CLEAR_CART" };

const shoppingCartReducer = (
  state: ShoppingCart,
  action: Action
): ShoppingCart => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        const updatedCart = { id: 1, userId: 1, items: [...state.items] };
        updatedCart.items[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        action.payload.quantity = 1;
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }

    case "REMOVE_ITEM":
      const itemToDeleteIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemToDeleteIndex !== -1) {
        const updatedCart = state;
        if (updatedCart.items[itemToDeleteIndex].quantity > 1) {
          updatedCart.items[itemToDeleteIndex].quantity -= 1;
          return updatedCart;
        } else {
          updatedCart.items.splice(itemToDeleteIndex, 1);
          return updatedCart;
        }
      }
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };
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
  const [cart, dispatch] = useReducer(shoppingCartReducer, {
    id: 0,
    userId: 0,
    items: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
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
