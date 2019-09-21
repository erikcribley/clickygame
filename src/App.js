import React from 'react';
import './App.css';
import Header from './components/header'
import Game from './components/game'

function App() {
  return (
    <div className="App">
      <div> <Header /> </div>
      <div> <Game /> </div>
    </div>
  );
}

export default App;
