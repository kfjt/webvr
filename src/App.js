import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

function App() {
  return (
    <div className="App">
      <VRScene />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const VRScene = () => {
  return (
    <Scene>
      <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
      <Entity light={{type: 'point'}}/>
      <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
      <Entity text={{value: 'Hello, WebVR!'}}/>
    </Scene>  
  )
}

export default App;
