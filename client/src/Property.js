import React from 'react';

const Property = (props) => {
  return (
    <article>
      <h1>Hello</h1>
      <h2>{props.property.location}</h2>
    </article>
  )
}

export default Property;
