interface BannerProps {
  onClaimCoins: () => void;
}

function Banner({ onClaimCoins }: BannerProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="rounded-2xl bg-base-200 px-6 py-16 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Build Your Dream Cricket Team
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
          Choose your favorite players and create your ultimate BPL Dream 11
          team.
        </p>

        <button className="btn btn-primary mt-6" onClick={onClaimCoins}>
          Claim Free Coins
        </button>
      </div>
    </section>
  );
}

export default Banner;
