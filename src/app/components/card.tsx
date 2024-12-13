"use client";
import { addBook, removeBook } from "@/app/utils/helperFunctions";
export type Book = {
  title: string;
  author: string;
  cover: string;
  bookId: string;
};

export type ShoppingCartItem = {
  bookId: string;
  quantity: number;
};

export type ShoppingCart = {
  items: ShoppingCartItem[];
};

export default function Card({ title, author, cover, bookId }: Readonly<Book>) {
  return (
    <div className="w-[180px] h-[350px] flex flex-col bg-white items-center justify-center rounded-md shadow-lg gap-1">
      <img src={cover} alt="cover" className="w-[130px] h-[190px]" />
      <h1 className="text-xl font-extralight">{title}</h1>
      <p className="text-sm font-bold">{author}</p>
      <div className="mt-3">
        <button
          className="btn btn-sm w-max rounded-full mr-2"
          onClick={() => addBook(bookId)}
        >
          add
        </button>
        <button
          className="btn btn-sm w-max rounded-full"
          onClick={() => removeBook(bookId)}
        >
          remove
        </button>
      </div>
    </div>
  );
}
