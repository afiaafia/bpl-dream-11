import { FaGlobe, FaUser } from 'react-icons/fa';
import { GiCricket, GiCricketBat } from 'react-icons/gi';

import type { Player } from '../../types/player';

interface PlayerCardProps {
  player: Player;
  onChoosePlayer: (player: Player) => void;
  isSelected: boolean;
}

function PlayerCard({ player, onChoosePlayer, isSelected }: PlayerCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <figure className="relative h-56 overflow-hidden sm:h-64">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute right-4 top-4">
          <span className="badge badge-primary badge-lg font-semibold shadow-lg">
            {player.playerType}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/60 to-transparent" />
      </figure>

      <div className="p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FaUser />
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-xl font-bold">{player.playerName}</h2>

            <p className="flex items-center gap-1 text-sm text-base-content/60">
              <FaGlobe className="text-xs" />
              {player.origin}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-base-200 p-3">
            <div className="mb-1 flex items-center gap-2 text-sm font-medium text-base-content/60">
              <GiCricketBat className="text-primary" />
              Batting
            </div>

            <p className="text-sm font-semibold">{player.battingStyle}</p>
          </div>

          <div className="rounded-xl bg-base-200 p-3">
            <div className="mb-1 flex items-center gap-2 text-sm font-medium text-base-content/60">
              <GiCricket className="text-primary" />
              Bowling
            </div>

            <p className="text-sm font-semibold">{player.bowlingStyle}</p>
          </div>
        </div>

        <div className="my-5 border-t border-base-300" />

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-base-content/60">Player Price</p>

            <h3 className="text-xl font-extrabold text-primary sm:text-2xl">
              {player.price} coins
            </h3>
          </div>

          <button
            onClick={() => onChoosePlayer(player)}
            className="btn btn-primary rounded-xl px-4 shadow-md transition-all hover:scale-105 sm:px-5"
            disabled={isSelected}
          >
            {isSelected ? 'Selected' : 'Choose Player'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
