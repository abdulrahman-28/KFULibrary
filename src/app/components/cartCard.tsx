"use client";

import React, { useEffect, useState } from "react";
import { Book, ShoppingCartItem } from "./card";
import { books } from "../page";
import { addBook, removeBook } from "@/app/utils/helperFunctions";

export default function CartCard({ cartBook }: { cartBook: ShoppingCartItem }) {
  const book = books.find((book) => book.bookId === cartBook.bookId);
  const [quantity, setQuantity] = useState(cartBook.quantity);

  useEffect(() => {
    //get the quantity of the local storage
    const cart = localStorage.getItem("cart");
    if (cart) {
      const parsedCart = JSON.parse(cart);
      const itemIndex = parsedCart.items.findIndex(
        (item: ShoppingCartItem) => item.bookId === cartBook.bookId
      );
      if (itemIndex !== -1) {
        setQuantity(parsedCart.items[itemIndex].quantity);
      }
    }
  }, []);
  return (
    <div className="w-[320px] h-[350px] flex bg-white items-center justify-center rounded-md shadow-lg gap-3 px-3">
      <img src={book?.cover} alt="cover" className="w-[150px] h-[250px]" />
      <div className="flex flex-col gap-y-1">
        <p className="text-lg font-bold">{book?.title}</p>
        <p className="text-sm">{book?.author}</p>
        <div>
          <p className="text-lg font-bold">Starting Date:</p>
          <p className="text-sm">rand date</p>
        </div>
        <div>
          <p className="text-lg font-bold">Dead Line Date:</p>
          <p className="text-sm">rand date</p>
        </div>
        <div>
          <p className="text-lg font-bold">Quantity:</p>
          <p className="text-sm">{quantity}</p>
        </div>
        <div className="flex gap-x-2">
          <button
            className="btn btn-xs"
            onClick={() => addBook(cartBook.bookId)}
          >
            inc
          </button>
          <button
            className="btn btn-xs"
            onClick={() => removeBook(cartBook.bookId)}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
}
