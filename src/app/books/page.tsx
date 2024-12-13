import React from "react";
import { books } from "../page";
import Card from "../components/card";

export default function page() {
  return (
    <div className="px-24 py-6 bg-[#FFFAF5] min-h-screen grid grid-cols-5 gap-5">
      {books.map((book, i) => (
        <Card key={i} {...book} />
      ))}
    </div>
  );
}
