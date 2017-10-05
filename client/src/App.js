import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      properties: []
    }
  }
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1 className="App-title"></h1>
        </header>
        <section>
          <PropList properties={this.state.properties} />
        </section>

      </main>
    );
  }
}

export default App;
