import React from 'react';
import logo from './logo.svg';
import './App.css';
import MissionContainer from './components/Mission';
import MissionList from './components/MissionInfo';

function App() {
  return (
    <div className="app-container">
      <MissionContainer />
      <MissionList />
    </div>
  );
}

export default App;
