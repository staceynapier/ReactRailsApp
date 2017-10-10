import React from 'react';
import './Details.css';


class Details extends React.Component {

  handleImageClick(e) {
    document.getElementById('detail-image').classList.toggle('full-image');
  }

  render() {

    const list = this.props.property.images.map(( img, index ) => {
      return(
      <img
        src={img.address}
        key={index}
        alt="property"
        className="detail-image"
        id="detail-image"
        onClick={this.handleImageClick}/>
    )
    })

    return (
      <section>
        <h2>{this.props.property.location}</h2><br/>
        <h4>Price: {this.props.property.price}</h4>
        <p>Bedrooms: {this.props.property.bedrooms}</p>
        <p>Bathrooms: {this.props.property.bathrooms}</p>
        <p>Public Rooms: {this.props.property.publicRooms}</p>
        <p>Furnished: {this.props.property.furnished}</p>
        <p>Available From: {this.props.property.availableFrom}</p>
        <p>{this.props.property.description}</p>
        <ul>
          {list}
        </ul>
      </section>
    )
  }

}

export default Details;
