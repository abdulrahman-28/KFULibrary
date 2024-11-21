export default function page() {
  return (
    <div className="h-screen bg-[#FFFAF5] flex">
      <section className="flex-1 flex items-center justify-center">
        <form className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">KFU Library</h1>
          <input type="text" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <a className="btn rounded-full" href={"/"}>
            Login
          </a>
        </form>
      </section>
      <section className="flex-1 bg-black">
        <img src="image.png" className="w-full h-full object-cover" />
      </section>
    </div>
  );
}
