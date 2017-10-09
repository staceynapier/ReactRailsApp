import React from 'react';
import Property from './Property'
import './PropList.css';


class PropList extends React.Component {

  render() {
    const list = this.props.properties.map( (property, index) => {
      return (
        <Property
          property={property}
          key={index}
          handlePropClick={this.props.handlePropClick}
        />
      )
    })

    return (
      <ul>
        { list }
      </ul>
    )
  }
}

export default PropList;
