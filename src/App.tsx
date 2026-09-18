import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Players from './components/players/Players';

function App() {
  const [coins, setCoins] = useState(1000);

  const handleClaimCoins = () => {
    setCoins((currentCoins) => currentCoins + 1000);

    toast.success('1000 coins added successfully!');
  };

  return (
    <>
      <Navbar coins={coins} />

      <Banner onClaimCoins={handleClaimCoins} />

      <Players coins={coins} setCoins={setCoins} />

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
