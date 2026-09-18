import bannerMain from '../assets/banner-main.png';
import bgShadow from '../assets/bg-shadow.png';

interface BannerProps {
  onClaimCoins: () => void;
  hasClaimed: boolean;
}

function Banner({ onClaimCoins, hasClaimed }: BannerProps) {
  return (
    <section id="home" className="px-4 py-6 sm:py-10">
      <div
        className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-base-200 bg-cover bg-center px-4 py-10 text-center sm:px-6 sm:py-12 md:py-16"
        style={{
          backgroundImage: `url(${bgShadow})`,
        }}
      >
        <div className="mx-auto max-w-3xl">
          <img
            src={bannerMain}
            alt="BPL Dream 11 cricket players"
            className="mx-auto mb-6 w-full max-w-xs sm:mb-8 sm:max-w-md md:max-w-xl"
          />

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Build Your Dream Cricket Team
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-base-content/70 sm:text-base">
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
