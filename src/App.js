import React, { useState } from 'react';
import './App.css';
import MissionContainer from './components/Mission';
import MissionList from './components/MissionInfo';

function App() {
  const [id, setId] = useState('1')
  return (
    <div className="app-container">
      <MissionContainer setId={setId} />
      <MissionList id={id} />
    </div>
  );
}

export default App;
