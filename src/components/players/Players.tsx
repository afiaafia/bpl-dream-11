import { useEffect, useState } from 'react';
import type { Player } from '../../types/player';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

function Players() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Choose Your Players</h1>

        <button className="btn btn-outline">Selected (0)</button>
      </div>

      <div className="space-y-16">
        <AvailablePlayers players={players} />
        <SelectedPlayers />
      </div>
    </main>
  );
}

export default Players;
