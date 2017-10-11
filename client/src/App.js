import React from 'react';
import './App.css';
import PropList from './PropList'
import Details from './Details.js'
import Navigation from './Navigation'
import Contact from './Contact'
import Filter from './Filter'
import Footer from './Footer'
import edinburgh from './edinburgh.jpg'
import About from './About';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      properties: [],
      filteredProperties: null,
      selectedProperty: null,
      contact: false,
      filtered: false,
      about: false
    }
    this.handlePropClick = this.handlePropClick.bind(this)
    this.handleNavClick = this.handleNavClick.bind(this)
    this.handleContactClick = this.handleContactClick.bind(this)
    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.handleAboutClick = this.handleAboutClick.bind(this)
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
      contact: false,
      about: false
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
      filteredProperties: null,
      about: false
    })
  }

  handleContactClick() {
    this.setState({
      selectedProperty: null,
      contact: true,
      filtered: false,
      about: false
    })
  }

  handleAboutClick() {
    this.setState({
      selectedProperty: null,
      contact: null,
      filtered: false,
      about: true
    })
  }

  handleFormSubmit(properties) {
    this.setState({
      selectedProperty: null,
      contact: false,
      filtered: false,
      filteredProperties: properties,
      about: false
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

    if (this.state.about === true) {
      nodeToDisplay = <About />
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
      />
    } else

    {
      nodeToDisplay = <PropList
        properties={this.state.properties}
        handlePropClick={this.handlePropClick}
        handleFilterClick={this.handleFilterClick}
      />
    }

    return (
      <main className="App">

        <section className="navigation">
            <Navigation
              handleNavClick={this.handleNavClick}
              handleContactClick={this.handleContactClick}
              handleAboutClick={this.handleAboutClick}/>
        </section>

        {/* <section className="animated fadeInUpBig">
            <img src={edinburgh} className="main-image" />
        </section> */}

        <section className="main-content">
            { nodeToDisplay }
        </section>

        <footer  className="footer">
          <Footer/>
        </footer>

      </main>

    );
  }
}

export default App;
