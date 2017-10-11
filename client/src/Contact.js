import './App.css';
import './Contact.css';

import React from 'react';

class Contact extends React.Component {

  render() {

    return(
      <section>
        <h4>Contact us</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2236.3982969085055!2d-3.233754484570189!3d55.9077938874955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c6d88d05995b%3A0xa28cdd1c01d94f7a!2s42+Colinton+Mains+Cres%2C+Edinburgh+EH13!5e0!3m2!1sen!2suk!4v1507471683812"
                className="map"
                title="map">
        </iframe>

      </section>
    )

  }

}

export default Contact;
