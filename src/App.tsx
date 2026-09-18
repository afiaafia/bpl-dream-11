import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Players from './components/players/Players';
import Footer from './components/Footer';

function App() {
  const [coins, setCoins] = useState(1000);
  const [hasClaimed, setHasClaimed] = useState(false);

  const handleClaimCoins = () => {
    if (hasClaimed) {
      return;
    }

    setCoins((currentCoins) => currentCoins + 1000);
    setHasClaimed(true);

    toast.success('1000 coins added successfully!');
  };

  return (
    <>
      <Navbar coins={coins} />

      <Banner onClaimCoins={handleClaimCoins} hasClaimed={hasClaimed} />

      <Players coins={coins} setCoins={setCoins} />

      <Footer />

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
