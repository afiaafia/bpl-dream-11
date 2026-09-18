import logo from '../assets/logo.png';

interface NavbarProps {
  coins: number;
}

function Navbar({ coins }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:py-4">
        <a href="#home" className="shrink-0">
          <img src={logo} alt="BPL Dream 11" className="h-9 w-auto sm:h-10" />
        </a>

        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="#home"
            className="hidden text-sm font-medium hover:text-primary sm:block"
          >
            Home
          </a>

          <a
            href="#players"
            className="hidden text-sm font-medium hover:text-primary sm:block"
          >
            Players
          </a>

          <button className="btn btn-sm whitespace-nowrap">{coins} Coin</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
