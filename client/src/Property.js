import React from 'react';
import Details from './Details.js'


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
          alt="Property"
          src={this.props.property.images}
          onClick={this.handlePropClick}
        />
        <h2>{this.props.property.location}</h2>
        <p>{this.props.property.description}</p>
      </article>
    )
  }
}

export default Property;