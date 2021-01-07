import React, { useState } from 'react';
import './App.css';
import MissionContainer from './components/Mission';
import MissionList from './components/MissionInfo';
import firebase from './components/firebase';

function App() {
  const [id, setId] = useState('1');

  const message = firebase.messaging();
  message.requestPermission().then((permission) => {
    return message.getToken();
  }).then(token => {
    console.log(token)
  }).catch(error => { console.log(error.message) })




  return (
    <div className="app-container">
      <MissionContainer setId={setId} />
      <MissionList id={id} />
    </div>
  );
}

export default App;
