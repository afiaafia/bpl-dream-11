import logoFooter from '../assets/logo-footer.png';

function Footer() {
  return (
    <footer className="mt-16 border-t border-base-300 bg-base-200">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logoFooter} alt="BPL Dream 11" className="h-12 w-auto" />

            <p className="mt-4 max-w-sm text-sm leading-6 text-base-content/60">
              Build your dream cricket team by selecting your favorite players
              and managing your team within your available coins.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a href="#home" className="hover:text-primary">
                Home
              </a>

              <a href="#players" className="hover:text-primary">
                Players
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">BPL Dream 11</h3>

            <p className="mt-4 text-sm leading-6 text-base-content/60">
              Create your team, choose your players, and build your ultimate
              cricket squad.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-base-300 pt-6 text-center text-sm text-base-content/60">
          <p>© {new Date().getFullYear()} BPL Dream 11. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
