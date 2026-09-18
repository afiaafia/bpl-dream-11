import type { Player } from '../../types/player';

interface PlayerCardProps {
  player: Player;
  onChoosePlayer: (player: Player) => void;
}

function PlayerCard({ player, onChoosePlayer }: PlayerCardProps) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-56 w-full rounded-xl object-cover"
        />

        <h2 className="card-title">{player.playerName}</h2>

        <p className="text-sm text-base-content/70">{player.playerType}</p>

        <p className="text-sm">{player.origin}</p>

        <p className="font-semibold">Price: {player.price}</p>

        <div className="card-actions">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onChoosePlayer(player)}
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
