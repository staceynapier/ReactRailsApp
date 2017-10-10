import React from 'react';
import footer from './footer.png'

class Footer extends React.Component {
  render () {
    return(
      <section>
        <img src={footer} className="footer"/>
      </section>
    )
  }

}
export default Footer;
