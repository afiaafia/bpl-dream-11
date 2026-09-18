import type { Player } from '../../types/player';
import SelectedPlayerCard from './SelectedPlayerCard';

interface SelectedPlayersProps {
  selectedPlayers: Player[];
  onRemovePlayer: (playerId: number) => void;
}

function SelectedPlayers({
  selectedPlayers,
  onRemovePlayer,
}: SelectedPlayersProps) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Selected Players ({selectedPlayers.length})
        </h2>

        <p className="mt-1 text-sm text-base-content/60">
          Your selected players will appear here.
        </p>
      </div>

      {selectedPlayers.length === 0 ? (
        <p className="rounded-xl border border-dashed p-6 text-center text-base-content/60">
          No players selected yet.
        </p>
      ) : (
        <div className="space-y-4">
          {selectedPlayers.map((player) => (
            <SelectedPlayerCard
              key={player.id}
              player={player}
              onRemovePlayer={onRemovePlayer}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default SelectedPlayers;
