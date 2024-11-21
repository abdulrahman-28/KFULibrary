export type Book = {
  title: string;
  author: string;
  cover: string;
};

export default function Card({ title, author, cover }: Readonly<Book>) {
  return (
    <main className="w-[180px] h-[350px] flex flex-col bg-white items-center justify-center rounded-md shadow-lg gap-1">
      <img src={cover} alt="cover" className="w-[130px] h-[190px]" />
      <h1 className="text-xl font-extralight">{title}</h1>
      <p className="text-sm font-bold">{author}</p>
      <div className="mt-3">
        <button className="btn btn-sm w-max rounded-full mr-2">add</button>
        <button className="btn btn-sm w-max rounded-full">remove</button>
      </div>
    </main>
  );
}
