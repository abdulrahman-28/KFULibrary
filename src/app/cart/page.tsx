"use client";

import React from "react";
import { ShoppingCart } from "../components/card";
import CartCard from "../components/cartCard";
import { useGetCart } from "@/app/utils/helperFunctions";

export default function page() {
  const parsedCart = useGetCart();

  return (
    <div className="px-24 py-6 gap-y-5 flex flex-col">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <div className=" bg-[#FFFAF5] min-h-screen grid grid-cols-2 gap-5">
        {parsedCart.items.map((item, index) => (
          <div key={index}>
            <CartCard cartBook={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
