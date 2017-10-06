import React from 'react';

class Details extends React.Component {

  render(props) {
    return (
      <section>
        <img
          alt="Property"
          src={this.props.property.images}
        />
        <h2>{this.props.property.location}</h2><br/>
        <h4>Price: {this.props.property.price}</h4>
        <p>Bedrooms: {this.props.property.bedrooms}</p>
        <p>Bathrooms: {this.props.property.bathrooms}</p>
        <p>Public Rooms: {this.props.property.publicRooms}</p>
        <p>Furnished: {this.props.property.furnished}</p>
        <p>Available From: {this.props.property.availableFrom}</p>
        <p>{this.props.property.description}</p>
      </section>
    )
  }

}

export default Details;
