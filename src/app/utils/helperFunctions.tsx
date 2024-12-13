"use client";

import { ShoppingCart } from "../components/card";

export function addBook(bookId: string) {
  const cart = localStorage.getItem("cart");
  if (cart) {
    const parsedCart: ShoppingCart = JSON.parse(cart);
    const itemIndex = parsedCart.items.findIndex(
      (item) => item.bookId === bookId
    );
    if (itemIndex !== -1) {
      parsedCart.items[itemIndex].quantity += 1;
    } else {
      parsedCart.items.push({ bookId, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(parsedCart));
  } else {
    localStorage.setItem(
      "cart",
      JSON.stringify({ items: [{ bookId, quantity: 1 }] })
    );
  }
}

export function removeBook(bookId: string) {
  const cart = localStorage.getItem("cart");
  if (cart) {
    const parsedCart: ShoppingCart = JSON.parse(cart);
    const itemIndex = parsedCart.items.findIndex(
      (item) => item.bookId === bookId
    );
    if (itemIndex !== -1) {
      parsedCart.items[itemIndex].quantity -= 1;
      if (parsedCart.items[itemIndex].quantity === 0) {
        parsedCart.items.splice(itemIndex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(parsedCart));
    }
  }
}

export function useGetCart() {
  const cart = localStorage.getItem("cart");
  const parsedCart: ShoppingCart = JSON.parse(cart || "{ items: [] }");
  return parsedCart;
}
