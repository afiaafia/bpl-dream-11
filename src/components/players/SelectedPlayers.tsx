import type { Player } from '../../types/player';
import SelectedPlayerCard from './SelectedPlayerCard';

interface SelectedPlayersProps {
  selectedPlayers: Player[];
  onRemovePlayer: (playerId: number) => void;
  onContinueSelecting: () => void;
}

function SelectedPlayers({
  selectedPlayers,
  onRemovePlayer,
  onContinueSelecting,
}: SelectedPlayersProps) {
  const totalCost = selectedPlayers.reduce(
    (total, player) => total + player.price,
    0
  );

  return (
    <section>
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Selected Players</h2>

          <p className="mt-1 text-base-content/60">
            {selectedPlayers.length}/6 players selected
          </p>
        </div>

        <div className="text-left md:text-right">
          <p className="text-sm text-base-content/60">Total Team Cost</p>

          <p className="text-2xl font-extrabold text-primary">
            {totalCost} coins
          </p>
        </div>
      </div>

      {selectedPlayers.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-base-300 bg-base-100 p-10 text-center">
          <h3 className="text-xl font-bold">No players selected yet</h3>

          <p className="mt-2 text-base-content/60">
            Choose players from the Available Players section.
          </p>

          <button
            className="btn btn-primary mt-6"
            onClick={onContinueSelecting}
          >
            Continue Selecting
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {selectedPlayers.map((player) => (
              <SelectedPlayerCard
                key={player.id}
                player={player}
                onRemovePlayer={onRemovePlayer}
              />
            ))}
          </div>

          {selectedPlayers.length < 6 && (
            <div className="mt-8 text-center">
              <button
                className="btn btn-outline btn-primary"
                onClick={onContinueSelecting}
              >
                Continue Selecting
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default SelectedPlayers;
