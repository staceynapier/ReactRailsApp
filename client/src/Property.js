import React from 'react';
import Details from './Details.js'
import './PropList.css';

class Property extends React.Component {

  constructor(props) {
    super(props)
    this.handlePropClick = this.handlePropClick.bind(this)
  }

  handlePropClick() {
    this.props.handlePropClick(this.props.property)
    console.log("clicked");
    }

  render(props) {
    return (
      <article>
        <img
          className="list-image"
          alt="Property"
          src={this.props.property.images}
          onClick={this.handlePropClick}
        />
        <h2>{this.props.property.location}</h2>
        <p>Bedrooms: {this.props.property.bedrooms}</p>
        <p>Bathrooms: {this.props.property.bathrooms}</p>
        <p>Price: {this.props.property.price}</p>
      </article>
    )
  }
}

export default Property;
