import React, { Component } from 'react';
import Prop from './Prop'

const PropList = (props) => {

  const list = props.properties.map( (property) => {
    return (
      <Property />
    )
  })

  return (
    <ul>
      {list}
    </ul>
  )

}

export default PropList;
