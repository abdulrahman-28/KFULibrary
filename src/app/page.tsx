// import { Book } from "../components/card";
import { Book } from "./components/card";
import Card from "./components/card";

export const books: Book[] = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "book1.png",
    bookId: "1",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "book1.png",
    bookId: "2",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "book1.png",
    bookId: "3",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "book1.png",
    bookId: "4",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "book1.png",
    bookId: "5",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "book1.png",
    bookId: "6",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "book1.png",
    bookId: "7",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "book1.png",
    bookId: "9",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "book1.png",
    bookId: "10",
  },
];

export default function Home() {
  return (
    <main className="px-24 py-6 bg-[#FFFAF5]">
      <section className="flex mt-6">
        <div className="flex-1 flex flex-col justify-center gap-2">
          <h1 className="text-3xl font-bold">KFU Library</h1>
          <p className="w-[300px]">
            welcome to King Faisal University library where the learning really
            start.
          </p>
          <a className="btn w-[200px] mt-3 rounded-full" href={"/books"}>
            View All Books
          </a>
        </div>
        <div className="flex-1 justify-center">
          <img src="image.png" alt="" />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-xl font-bold">Most Borrowed</h1>
        <div className="flex flex-row-reverse gap-3 mt-5 w-full overflow-scroll">
          {books.map((book, i) => (
            <div key={i}>
              <Card {...book} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
