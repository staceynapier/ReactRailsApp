import './App.css';
import './Contact.css';

import React from 'react';

class Contact extends React.Component {

  render() {

    return(
      <section>
        <h4>Contact us</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.139439647856!2d-3.204855484154126!3d55.94695508060569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c798ffae388f%3A0x16242bf83b4418ae!2sCastle+Terrace!5e0!3m2!1sen!2suk!4v1507748259548" 
                className="map"
                title="map">
        </iframe>

      </section>
    )

  }

}

export default Contact;
