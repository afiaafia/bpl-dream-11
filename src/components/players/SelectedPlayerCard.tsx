import { FaTrash } from 'react-icons/fa';

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
    <div className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-20 w-20 rounded-xl object-cover"
        />

        <div>
          <h3 className="text-lg font-bold">{player.playerName}</h3>

          <p className="text-sm text-base-content/60">{player.playerType}</p>

          <p className="mt-1 font-semibold text-primary">
            {player.price} coins
          </p>
        </div>
      </div>

      <button
        className="btn btn-error btn-sm gap-2"
        onClick={() => onRemovePlayer(player.id)}
      >
        <FaTrash />
        Remove
      </button>
    </div>
  );
}

export default SelectedPlayerCard;
