import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Hero />

        <Resume />
      </div>
    );
  }
}

export default App;
