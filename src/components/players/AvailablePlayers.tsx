import type { Player } from '../../types/player';
import PlayerCard from './PlayerCard';

interface AvailablePlayersProps {
  players: Player[];
  onChoosePlayer: (player: Player) => void;
  selectedPlayers: Player[];
  searchText: string;
  onSearchChange: (value: string) => void;
  selectedRole: string;
  onRoleChange: (value: string) => void;
}

function AvailablePlayers({
  players,
  onChoosePlayer,
  selectedPlayers,
  searchText,
  onSearchChange,
  selectedRole,
  onRoleChange,
}: AvailablePlayersProps) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Available Players</h2>

        <p className="mt-1 text-sm text-base-content/60">
          Choose players for your dream team.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search player..."
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
          className="input input-bordered w-full md:flex-1"
        />

        <select
          value={selectedRole}
          onChange={(event) => onRoleChange(event.target.value)}
          className="select select-bordered w-full md:w-60"
        >
          <option value="All">All Players</option>
          <option value="Batter">Batter</option>
          <option value="Bowler">Bowler</option>
          <option value="All-Rounder">All-Rounder</option>
          <option value="Wicket-Keeper Batter">Wicket-Keeper Batter</option>
        </select>
      </div>

      {players.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-base-300 p-10 text-center">
          <p className="text-base-content/60">No players found.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {players.map((player) => {
            const isSelected = selectedPlayers.some(
              (selectedPlayer) => selectedPlayer.id === player.id
            );

            return (
              <PlayerCard
                key={player.id}
                player={player}
                onChoosePlayer={onChoosePlayer}
                isSelected={isSelected}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default AvailablePlayers;
