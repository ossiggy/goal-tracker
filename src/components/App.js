import React, { Component } from 'react';

import Header from './Header';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div className = "app">
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
