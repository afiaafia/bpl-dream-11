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
      <h2 className="mb-6 text-2xl font-bold">Selected Players</h2>

      {selectedPlayers.length === 0 ? (
        <p className="text-base-content/60">No players selected yet.</p>
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
