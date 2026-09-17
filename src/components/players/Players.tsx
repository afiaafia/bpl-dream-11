import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

function Players() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Choose Your Players</h1>

        <button className="btn btn-outline">Selected (0)</button>
      </div>

      <div className="space-y-16">
        <AvailablePlayers />
        <SelectedPlayers />
      </div>
    </main>
  );
}

export default Players;
