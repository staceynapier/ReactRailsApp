import React from 'react';

class Details extends React.Component {

  render(props) {
    return (
      <section>
        <img
          alt="Property"
          src={this.props.property.images}
        />
        <h4>
          {this.props.property.location}
        </h4>
      </section>
    )
  }

}

export default Details;
