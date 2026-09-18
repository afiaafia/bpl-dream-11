import bannerMain from '../assets/banner-main.png';
import bgShadow from '../assets/bg-shadow.png';

interface BannerProps {
  onClaimCoins: () => void;
  hasClaimed: boolean;
}

function Banner({ onClaimCoins, hasClaimed }: BannerProps) {
  return (
    <section id="home" className="px-4 py-10">
      <div
        className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-base-200 bg-cover bg-center px-6 py-12 text-center md:py-16"
        style={{
          backgroundImage: `url(${bgShadow})`,
        }}
      >
        <div className="mx-auto max-w-3xl">
          <img
            src={bannerMain}
            alt="BPL Dream 11 cricket players"
            className="mx-auto mb-8 w-full max-w-xl"
          />

          <h1 className="text-4xl font-bold md:text-5xl">
            Build Your Dream Cricket Team
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
            Choose your favorite players and create your ultimate BPL Dream 11
            team.
          </p>

          <button
            className="btn btn-primary mt-6"
            onClick={onClaimCoins}
            disabled={hasClaimed}
          >
            {hasClaimed ? 'Coins Claimed' : 'Claim Free Coins'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
