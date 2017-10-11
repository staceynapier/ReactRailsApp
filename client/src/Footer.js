import React from 'react';
import footer from './footer.png';
import './App.css';


class Footer extends React.Component {
  render () {
    return(
      <section>
        <img src={footer} className="footer-image" alt="Edinburgh skyline"/>
      </section>
    )
  }

}
export default Footer;
