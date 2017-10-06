import React from 'react';
import './App.css';
import PropList from './PropList'
import Details from './Details.js'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      properties: [],
      selectedProperty: null
    }
    this.handlePropClick = this.handlePropClick.bind(this)
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

  handlePropClick(property) {
    this.setState({selectedProperty: property})
    console.log(this.state.selectedProperty);
  }

  render() {

    // logic here to check if selectedProperty is null or not
    // if it is null, display PropList component
    // else deisplay Details component
    let nodeToDisplay = {}

    if (this.state.selectedProperty !== null) {
        nodeToDisplay = <Details />
    } else {
      nodeToDisplay = <PropList properties={this.state.properties} handlePropClick={this.handlePropClick}/>
    }

    return (
      <main className="App">
        <section className="navigation">

        </section>
        <section className="prop-list">

            { nodeToDisplay }
        </section>
      </main>
    );
  }
}

export default App;
