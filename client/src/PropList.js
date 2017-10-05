import React from 'react';
import Property from './Property'

const PropList = (props) => {

  const list = props.properties.map( (property, index) => {
    return (
      <Property property={property} key={index}/>
    )
  })

  return (
    <ul>
      {list}
    </ul>
  )

}

export default PropList;
