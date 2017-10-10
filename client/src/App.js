import React from 'react';
import './App.css';
import PropList from './PropList'
import Details from './Details.js'
import Navigation from './Navigation'
import Contact from './Contact'
import Filter from './Filter'
import Footer from './Footer'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      properties: [],
      filteredProperties: null,
      selectedProperty: null,
      contact: false,
      filtered: false
    }
    this.handlePropClick = this.handlePropClick.bind(this)
    this.handleNavClick = this.handleNavClick.bind(this)
    this.handleContactClick = this.handleContactClick.bind(this)
    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
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

  handleFilterClick() {
    this.setState({
      selectedProperty: null,
      filtered: true,
      contact: false
      })
  }

  handlePropClick(property) {
    this.setState({
      selectedProperty: property,
      filtered: false
    })
  }

  handleNavClick() {
    this.setState({
      selectedProperty: null,
      contact: false,
      filtered: false,
      filteredProperties: null
    })
  }

  handleContactClick() {
    this.setState({
      selectedProperty: null,
      contact: true,
      filtered: false
    })
  }

  handleFormSubmit(properties) {
    this.setState({
      selectedProperty: null,
      contact: false,
      filtered: false,
      filteredProperties: properties
    })
  }

  render() {

    let nodeToDisplay = {}

    if (this.state.filtered === true) {
      nodeToDisplay = <Filter properties={this.state.properties} handleFormSubmit={this.handleFormSubmit}/>
    } else

    if (this.state.contact === true) {
      nodeToDisplay = <Contact />
    } else

    if (this.state.selectedProperty !== null) {
      nodeToDisplay = <Details
        property={this.state.selectedProperty}
        images={this.state.images}
        className="animated fadeInUpBig"/>
    } else

    if (this.state.filteredProperties !== null) {
      nodeToDisplay = <PropList
        properties={this.state.filteredProperties}
        handlePropClick={this.handlePropClick}
        handleFilterClick={this.handleFilterClick}
        className="animated bounceInUp"/>
    } else

    {
      nodeToDisplay = <PropList
        properties={this.state.properties}
        handlePropClick={this.handlePropClick}
        handleFilterClick={this.handleFilterClick}
        className="animated bounceInUp"/>
    }

    return (
      <main className="App">

        <h2>Title</h2>

        <section className="navigation">
            <Navigation handleNavClick={this.handleNavClick} handleContactClick={this.handleContactClick}/>
        </section>

        <section className="main-content">
            { nodeToDisplay }
        </section>

        <footer>
          <Footer className="footer"/>
        </footer>

      </main>

    );
  }
}

export default App;
