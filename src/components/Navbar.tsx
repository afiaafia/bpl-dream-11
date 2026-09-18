import logo from '../assets/logo.png';

interface NavbarProps {
  coins: number;
}

function Navbar({ coins }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="BPL Dream 11" className="h-10 w-auto" />
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#home" className="text-sm font-medium hover:text-primary">
            Home
          </a>

          <a href="#players" className="text-sm font-medium hover:text-primary">
            Players
          </a>

          <button className="btn btn-sm">{coins} Coin</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
