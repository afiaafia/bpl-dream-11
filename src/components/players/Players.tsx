import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

import type { Player } from '../../types/player';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

interface PlayersProps {
  coins: number;
  setCoins: Dispatch<SetStateAction<number>>;
}

function Players({ coins, setCoins }: PlayersProps) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [activeTab, setActiveTab] = useState<'available' | 'selected'>(
    'available'
  );

  const [searchText, setSearchText] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleChoosePlayer = (player: Player) => {
    if (selectedPlayers.length >= 6) {
      toast.error('You can select a maximum of 6 players.');
      return;
    }

    const alreadySelected = selectedPlayers.some(
      (selectedPlayer) => selectedPlayer.id === player.id
    );

    if (alreadySelected) {
      toast.warning('This player is already selected.');
      return;
    }

    if (coins < player.price) {
      toast.error('Not enough coins to select this player.');
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);

    setCoins((currentCoins) => currentCoins - player.price);

    toast.success(`${player.playerName} selected successfully!`);
  };

  const handleRemovePlayer = (playerId: number) => {
    const playerToRemove = selectedPlayers.find(
      (player) => player.id === playerId
    );

    if (!playerToRemove) {
      return;
    }

    const remainingPlayers = selectedPlayers.filter(
      (player) => player.id !== playerId
    );

    setSelectedPlayers(remainingPlayers);

    setCoins((currentCoins) => currentCoins + playerToRemove.price);

    toast.info(`${playerToRemove.playerName} removed.`);
  };

  const filteredPlayers = players.filter((player) => {
    const matchesSearch = player.playerName
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesRole =
      selectedRole === 'All' || player.playerType === selectedRole;

    return matchesSearch && matchesRole;
  });

  return (
    <main id="players" className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Choose Your Players</h1>

        <div className="flex gap-2">
          <button
            className={`btn ${
              activeTab === 'available' ? 'btn-primary' : 'btn-outline'
            }`}
            onClick={() => setActiveTab('available')}
          >
            Available
          </button>

          <button
            className={`btn ${
              activeTab === 'selected' ? 'btn-primary' : 'btn-outline'
            }`}
            onClick={() => setActiveTab('selected')}
          >
            Selected ({selectedPlayers.length}/6)
          </button>
        </div>
      </div>

      {activeTab === 'available' && (
        <AvailablePlayers
          players={filteredPlayers}
          onChoosePlayer={handleChoosePlayer}
          selectedPlayers={selectedPlayers}
          searchText={searchText}
          onSearchChange={setSearchText}
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
        />
      )}

      {activeTab === 'selected' && (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          onRemovePlayer={handleRemovePlayer}
          onContinueSelecting={() => setActiveTab('available')}
        />
      )}
    </main>
  );
}

export default Players;
