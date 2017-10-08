import React from 'react';
import './App.css';
import PropList from './PropList'
import Details from './Details.js'
import Navigation from './Navigation'
import Contact from './Contact'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      properties: [],
      selectedProperty: null,
      contact: false
    }
    this.handlePropClick = this.handlePropClick.bind(this)
    this.handleNavClick = this.handleNavClick.bind(this)
    this.handleContactClick = this.handleContactClick.bind(this)
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
    this.setState({
      selectedProperty: null,
      contact: false
    })
  }

  handleContactClick() {
    this.setState({
      selectedProperty: null,
      contact: true
    })
  }

  render() {

    let nodeToDisplay = {}

    if (this.state.contact === true) {
      nodeToDisplay = <Contact />
    } else

    if (this.state.selectedProperty !== null) {
      nodeToDisplay = <Details property={this.state.selectedProperty}/>
    } else {
      nodeToDisplay = <PropList properties={this.state.properties} handlePropClick={this.handlePropClick}/>
    }

    return (
      <main className="App">
        <h2>Title</h2>
        <section className="navigation">
          <Navigation handleNavClick={this.handleNavClick} handleContactClick={this.handleContactClick}/>
        </section>
        <section className="prop-list">
            { nodeToDisplay }
        </section>
      </main>
    );
  }
}

export default App;
