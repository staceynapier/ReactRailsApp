import React, { Component } from 'react';
import './App.css';
import PropList from './PropList'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      properties: []
    }
  }

  componentDidMount(){
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://localhost:5000/properties");
    xml.addEventListener('load', () => {
      if(xml.status !== 200) return;
      console.log(xml.response);
      this.setState((prevState) => {
        return {
          properties: JSON.parse(xml.response)
        }
      })
    });
    xml.send()
  }

  render() {
    return (
      <main className="App">
  
        <section>
          <PropList properties={this.state.properties} />
        </section>

      </main>
    );
  }
}

export default App;
