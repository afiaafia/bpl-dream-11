import type { Player } from '../../types/player';

interface SelectedPlayerCardProps {
  player: Player;
  onRemovePlayer: (playerId: number) => void;
}

function SelectedPlayerCard({
  player,
  onRemovePlayer,
}: SelectedPlayerCardProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-base-100 p-4">
      <div className="flex items-center gap-4">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-16 w-16 rounded-lg object-cover"
        />

        <div>
          <h3 className="font-bold">{player.playerName}</h3>

          <p className="text-sm text-base-content/60">{player.playerType}</p>

          <p className="text-sm">Price: {player.price} coins</p>
        </div>
      </div>

      <button
        className="btn btn-error btn-sm"
        onClick={() => onRemovePlayer(player.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default SelectedPlayerCard;
