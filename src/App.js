// App.js
import React, { useState } from 'react';
import LandingPage from './LandingPage'; // Your existing landing page component
import PartyUI from './PartyUI'; // Import the new PartyUI component

const App = () => {
  const [partyStarted, setPartyStarted] = useState(false);

  return (
    <>
      {!partyStarted ? (
        <LandingPage onStart={() => setPartyStarted(true)} />
      ) : (
        <PartyUI />
      )}
    </>
  );
};

export default App;
