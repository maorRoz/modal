/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import './App.css';
import DialogContainer from './Dialog/DialogContainer';

const PageContent = () => (
  <div>
    <h1>Overlay This!</h1>
    <label>Name: </label>
    <input type='text' autoFocus />
    <button>Submit</button>
  </div>
);

const DialogContent = () => (
  <div>
    <h1>Join Us!</h1>
    <label>Email: </label>
    <input type='text'/>
    <button>Submit</button>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className='App'>
        <DialogContainer
        content={<PageContent/>}
        visualOverlay={<div className='void'/>}
        dialogContent={<DialogContent/>}/>
      </div>
    );
  }
}

export default App;
