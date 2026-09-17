import SelectedPlayerCard from './SelectedPlayerCard';

function SelectedPlayers() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Selected Players</h2>

        <p className="mt-1 text-sm text-base-content/60">
          Your selected players will appear here.
        </p>
      </div>

      <div className="space-y-4">
        <SelectedPlayerCard />
      </div>
    </section>
  );
}

export default SelectedPlayers;
