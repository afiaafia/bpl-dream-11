import PlayerCard from './PlayerCard';

function AvailablePlayers() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Available Players</h2>

        <p className="mt-1 text-sm text-base-content/60">
          Choose players for your dream team.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
    </section>
  );
}

export default AvailablePlayers;
