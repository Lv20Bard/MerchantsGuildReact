import React, { Component } from 'react';
import Header from './components/header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header/>
      
        {this.props.children}
      </div>
    );
  }
}

export default App;