import React from 'react';
import Property from './Property'
import './PropList.css';

class PropList extends React.Component {

  handleFilterClick() {
    this.props.handleFilterClick();
  }

  render() {
    const list = this.props.properties.map( (property, index) => {
      return (
        <Property
          property={property}
          key={index}
          handlePropClick={this.props.handlePropClick}
          className="animated fadeInUpBig"
        />
      )
    })

    return (
      <section>
        <button className="filter-button" onClick={this.handleFilterClick.bind(this)}>Refine Results</button>
        <ul>
          { list }
        </ul>
      </section>
    )
  }
}

export default PropList;
