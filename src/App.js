import React, { Component } from 'react';
import Header from './components/header'
import Routes from './routes';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App ">
        <Header/>
        

        <Routes> {this.props.children} </Routes>
      </div>
    );
  }
}

export default App;
