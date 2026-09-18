import type { Player } from '../../types/player';
import PlayerCard from './PlayerCard';

interface AvailablePlayersProps {
  players: Player[];
  onChoosePlayer: (player: Player) => void;
}

function AvailablePlayers({ players, onChoosePlayer }: AvailablePlayersProps) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Available Players</h2>

        <p className="mt-1 text-sm text-base-content/60">
          Choose players for your dream team.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onChoosePlayer={onChoosePlayer}
          />
        ))}
      </div>
    </section>
  );
}

export default AvailablePlayers;
