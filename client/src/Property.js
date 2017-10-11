import React from 'react';
import './PropList.css';
import './App.css';


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
      <article onClick={this.handlePropClick} className="flex-item">
        <img
          className="list-image"
          alt="Property"
          src={this.props.property.images[0].address}

        />
        <section className="list-description">
          <h5>{this.props.property.location}</h5>
          <p>Bedrooms: {this.props.property.bedrooms}</p>
          <p>Bathrooms: {this.props.property.bathrooms}</p>
          <p>Price: £{this.props.property.price} pcm</p>
        </section>
      </article>
    )
  }
}

export default Property;
