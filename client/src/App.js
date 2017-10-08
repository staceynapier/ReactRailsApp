import React from 'react';
import './App.css';
import PropList from './PropList'
import Details from './Details.js'
import Navigation from './Navigation'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      properties: [],
      selectedProperty: null
    }
    this.handlePropClick = this.handlePropClick.bind(this)
    this.handleNavClick = this.handleNavClick.bind(this)
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
  }

  handleNavClick() {
    this.setState({selectedProperty: null})
  }

  render() {

    // logic here to check if selectedProperty is null or not
    // if it is null, display PropList component
    // else deisplay Details component
    let nodeToDisplay = {}

    if (this.state.selectedProperty !== null) {
      nodeToDisplay = <Details property={this.state.selectedProperty}/>
    } else {
      nodeToDisplay = <PropList properties={this.state.properties} handlePropClick={this.handlePropClick}/>
    }

    return (
      <main className="App">
        <h2>Title</h2>
        <section className="navigation">
          <Navigation handleNavClick={this.handleNavClick}/>
        </section>
        <section className="prop-list">
            { nodeToDisplay }
        </section>
      </main>
    );
  }
}

export default App;
