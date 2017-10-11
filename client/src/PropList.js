import React from 'react';
import Property from './Property'
import './PropList.css';
import './App.css';
import filter from './filter.png'


class PropList extends React.Component {

  handleFilterClick() {
    this.props.handleFilterClick();
    console.log("Click");
  }

  render() {
    const list = this.props.properties.map( (property, index) => {
      return (
        <Property
          property={property}
          key={index}
          handlePropClick={this.props.handlePropClick}
          className="flex-item"
          id="property"
        />
      )
    })

    return (
      <section>
        <button className="filter-button" onClick={this.handleFilterClick.bind(this)}>
          <img className="filter-img" src={filter} alt="filter"/>
        </button>
        <ul className="flex-container">
          { list }
        </ul>
      </section>
    )
  }
}

export default PropList;
