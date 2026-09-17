function Navbar() {
  return (
    <nav className="border-b bg-base-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <h2 className="text-xl font-bold">BPL Dream 11</h2>

        <div className="flex items-center gap-6">
          <a href="#" className="text-sm">
            Home
          </a>

          <a href="#" className="text-sm">
            Players
          </a>

          <button className="btn btn-sm">0 Coin</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
