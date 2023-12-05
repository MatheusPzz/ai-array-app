// Inside App.js

import React, { useState } from 'react';
import ListPlayers from './ListPlayers';
import NewPlayerForm from './NewPlayerForm';
import './App.css';

function App() {



  return (
    <div className="App">
      <ListPlayers />
    </div>
  );
}

export default App;
