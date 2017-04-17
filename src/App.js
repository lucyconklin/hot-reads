import React, { Component } from 'react';
import './App.css';
import LinkList from './link-list/LinkList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hot Reads!</h1>
        <LinkList />
      </div>
    );
  }
}

export default App;
